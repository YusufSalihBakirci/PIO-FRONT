<template>
    <div class="col-12 position-relative">
        <div class="knowledgebase-bg b-center bg-size"
            :style="{ backgroundImage: 'url(' + require('@/assets/images/knowledgebase/bg_1.jpg') + ')' }"><img
                class="bg-img-cover bg-center d-none" src="@/assets/images/knowledgebase/bg_1.jpg" alt="looginpage" /></div>
        <div class="knowledgebase-search">
            <div>
                <h3>How Can I help you?</h3>
                <form class="form-inline" action="#" method="get">
                    <div class="form-group w-100"><vue-feather type="search"></vue-feather>
                        <input class="form-control-plaintext w-100" type="text" placeholder="Type question here" title="" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>