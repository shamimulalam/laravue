<template>
    <div>
        <div class="container mt-3">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card card-default">
                        <div class="card-header">
                            {{ $t("trans.dashboard.title") }}
                        </div>
                        <div class="card-body">
                            {{ $t("trans.dashboard.details") }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped>

</style>