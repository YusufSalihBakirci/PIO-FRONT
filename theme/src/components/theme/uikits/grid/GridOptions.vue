<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mt-1 mb-0" headerTitle="true"
        title="Grid Options" desc="Bootstrap grid system allow all six breakpoints, and any breakpoints
                      you can customize.">
        <div class="table-responsive">
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th></th>
                        <th class="text-center">
                            <p>Extra small</p><small>&lt;576px</small>
                        </th>
                        <th class="text-center">
                            <p>Small</p><small>≥576px</small>
                        </th>
                        <th class="text-center">
                            <p>Medium</p><small>≥768px</small>
                        </th>
                        <th class="text-center">
                            <p>Large</p><small>≥992px</small>
                        </th>
                        <th class="text-center">
                            <p>Extra large</p><small>≥1200px</small>
                        </th>
                        <th class="text-center">
                            <p>Extra extra large</p><small class="digits">≥1400px</small>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="text-nowrap" scope="row">Grid behavior</th>
                        <td>Horizontal at all times</td>
                        <td colspan="5">Collapsed to start, horizontal above breakpoints</td>
                    </tr>
                    <tr>
                        <th class="text-nowrap" scope="row">Max container width</th>
                        <td>None (auto) </td>
                        <td>540px</td>
                        <td>720px</td>
                        <td>960px</td>
                        <td>1140px</td>
                        <td>1320px</td>
                    </tr>
                    <tr>
                        <th class="text-nowrap" scope="row">Class prefix</th>
                        <td><code>.col-</code></td>
                        <td><code>.col-sm-</code></td>
                        <td><code>.col-md-</code></td>
                        <td><code>.col-lg-</code></td>
                        <td><code>.col-xl-</code></td>
                        <td><code>.col-xxl-  </code></td>
                    </tr>
                    <tr>
                        <th class="text-nowrap" scope="row"># of columns</th>
                        <td colspan="6">12</td>
                    </tr>
                    <tr>
                        <th class="text-nowrap" scope="row">Gutter width</th>
                        <td colspan="6">1.5rem (.75rem on left and right)</td>
                    </tr>
                    <tr>
                        <th class="text-nowrap" scope="row">Nestable</th>
                        <td colspan="6">Yes</td>
                    </tr>
                    <tr>
                        <th class="text-nowrap" scope="row">Offsets</th>
                        <td colspan="6">Yes</td>
                    </tr>
                    <tr>
                        <th class="text-nowrap" scope="row">Offsets</th>
                        <td colspan="6">Yes</td>
                    </tr>
                    <tr>
                        <th class="text-nowrap" scope="row">Column ordering</th>
                        <td colspan="6">Yes</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>