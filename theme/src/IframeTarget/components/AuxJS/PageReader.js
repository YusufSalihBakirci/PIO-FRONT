export function pageReader(frameContent) {
  console.log('pageRead')
  let frameHTML = frameContent.contentWindow.document

  // Elemanin gorunurlugunu kontrol eder
  function isVisible(element) {
    const style = getComputedStyle(element)
    const rect = element.getBoundingClientRect()

    return (
      style.display !== 'none' &&
      style.visibility !== 'hidden' &&
      style.position !== 'absolute' &&
      rect.width > 0 &&
      rect.height > 0
    )
  }

  // Eleman parent'a gore yeterince genis mi?
  function isFullWidth(element) {
    const parent = element.parentElement

    if (!parent) return false // Parent yoksa atla

    const parentWidth = parent.getBoundingClientRect().width || window.innerWidth // Fallback olarak parent kullan
    const elementWidth = element.getBoundingClientRect().width

    return elementWidth / parentWidth > 0.95 // Fak miktarda hata payına izin ver
  }

  // Eleman ekran genisligine gore çok küçük mü kontrolü.
  function isSignificantlySmallerThanViewport(element, widthPercent) {
    const rect = element.getBoundingClientRect()
    const viewportWidth = window.innerWidth

    return rect.width < viewportWidth * widthPercent
  }

  // Aşağıdaki kelimeleri içeren CLASS ve ID isimleri son listeden exclude edilecektir.
  const excludeKeywords = new Set([
    'swiper',
    'slick',
    'owl',
    'carousel',
    'empty',
    'singlebanner__wrap__background',
    'singlebanner__wrap__foreground',
    'singlebanner__wrap',
    'homepage-seo-container',
    'full-contained-widget',
    'secondary-menu-shown',
    'header__navigation-toggle',
    'modal__assembler',
    'firsat-kuponlari',
    'cf',
    'modal',
    'variants',
    'noSwipe',
    'is-layout-constrained',
    'hidden-xs', // hidden-xs class'ı dahil edilmez
    'none', // none class'ı dahil edilmez
    '\\', // Eğer id içinde ters eğik çizgi (\) varsa, bu da dahil edilmez
  ])

  // Listeye tagName ekleyelim
  const excludeTags = new Set(['picture', 'ul', 'ol', 'li'])

  function classOrIdToExclude(element) {
    const idContainsExcludedKeyword =
      element.id && [...excludeKeywords].some((keyword) => element.id === keyword)

    const classContainsExcludedKeyword = Array.from(element.classList).some(
      (cls) => excludeKeywords.has(cls), // classList'teki class ile eşleşen keyword
    )

    const tagNameContainsExcludedKeyword = excludeTags.has(element.tagName.toLowerCase()) // tagName kontrolü (case insensitive)

    return (
      idContainsExcludedKeyword || classContainsExcludedKeyword || tagNameContainsExcludedKeyword
    )
  }

  // Görünür ve tam genişliğe sahip elemanları kontrol eder
  function getVisibleFullWidthElementsFromArray(elementsArray) {
    const elements = []

    elementsArray.forEach((container) => {
      if (!container || !container.children) {
        return // Geçersiz HTML elemanlarını atla
      }

      const children = Array.from(container.children)

      for (const child of children) {
        if (classOrIdToExclude(child)) {
          continue // Carousel kütüphaneleri ve exclude edilen class isimlerini atla
        }

        if (isSignificantlySmallerThanViewport(child, 0.9)) {
          continue // Yukarıdaki eşik değeri altındaki elemanları atla
        }

        // Eğer görünür ve tam genişliğe sahipse, bu elemanları ekle
        if (isVisible(child) && isFullWidth(child)) {
          elements.push(child)

          // Child elemanları recursive olarak seç
          elements.push(...getVisibleFullWidthElementsFromArray([child]))
        }
      }
    })

    return elements
  }

  // Herhangi bir elemana özel selector oluştur
  function getUniqueSelector(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new Error('Verilen eleman geçerli bir HTML element değil.')
    }

    // If element has an ID, use it
    if (element.id) {
      return `#${element.id}`
    }

    // Tag name and classes
    let selector = element.tagName.toLowerCase()
    if (element.classList.length > 0) {
      selector += `.${Array.from(element.classList).join('.')}`
    }

    // Check uniqueness of the selector
    if (document.querySelectorAll(selector).length === 1) {
      return selector
    }

    // Use nth-child with parent selector if needed
    const parent = element.parentElement
    if (parent) {
      const siblings = Array.from(parent.children)
      const index = siblings.indexOf(element) + 1
      selector += `:nth-child(${index})`

      const parentSelector = getUniqueSelector(parent)
      if (parentSelector) {
        selector = `${parentSelector} > ${selector}`
      }
    }

    return selector
  }

  // Seçimi istenen tag'leri burada seç
  function main() {
    const containers = frameHTML.querySelectorAll('div, section, body')

    if (!containers || containers.length === 0) {
      // console.log('Hiçbir container bulunamadı.')
      return []
    }

    // HTMLCollection'i Array olarak dönüştür
    const visibleFullWidthElements = getVisibleFullWidthElementsFromArray(Array.from(containers))

    if (visibleFullWidthElements.length === 0) {
      // console.log('Görünür ve tam genişlikte eleman bulunamadı.')
      return []
    }

    // Tüm elemanlar için selector oluştur
    const uniqueSelectors = visibleFullWidthElements.map(getUniqueSelector)

    // Son olarak, exclude edilen keyword'leri içeren selector'ları filtrele
    const filteredSelectors = uniqueSelectors.filter((selector) => {
      // Daha hızlı arama için Set kullanılıyor
      return ![...excludeKeywords].some((keyword) => selector.includes(keyword))
    })

    return filteredSelectors
  }

  // Measure the execution time of the 'main' function
  // console.time('Execution Time')

  let selectorList = Array.from(new Set(main(frameContent)))

  // Log the execution time in seconds
  // console.timeEnd('Execution Time')

  // console.log(selectorList)
  return selectorList
}

export function highligthSelection(frameContent, selectedId) {
  let frameHTML = frameContent.contentWindow.document
  console.log(selectedId)

  // Create style element to add styles for highlighted element
  let highlight = frameHTML.createElement('style')
  highlight.innerHTML = `
    .element-highlight {
      position: relative;
      background-color: rgba(0, 123, 255, 0.3);
      border: 2px solid rgba(0, 123, 255, 0.7);
      box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
      overflow: hidden;
      height: auto;
    }

    .element-highlight::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 5%;
      height: 100%;
      background-color: white;
      transform: skewY(-15deg);
      animation: moveLine 6s infinite cubic-bezier(0.42, 0, 0.58, 1); /* Improved smoothness */
    }

    @keyframes moveLine {
      0% {
        transform: translateX(-100%) skewY(-15deg);
      }
      50% {
        transform: translateX(100%) skewY(-15deg);
      }
      100% {
        transform: translateX(-100%) skewY(-15deg);
      }
    }
  `
  frameHTML.head.append(highlight)

  // Get the previously highlighted element, if any
  let previousIframeEl = frameHTML.querySelector('.element-highlight') || null

  // Get the newly selected element
  let selectedIframeEl = frameHTML.querySelector(selectedId)

  if (selectedIframeEl) {
    // Remove the highlight from the previous element if it exists
    if (previousIframeEl) {
      previousIframeEl.classList.remove('element-highlight')
    }

    // Add the highlight class to the selected element
    selectedIframeEl.classList.add('element-highlight')

    // Smooth scroll to the selected element using scrollIntoView()
    selectedIframeEl.scrollIntoView({
      behavior: 'smooth', // Ensures smooth scrolling
      block: 'center', // Aligns the element in the center vertically
      inline: 'nearest', // Ensures horizontal scrolling happens if necessary
    })
  }
}
