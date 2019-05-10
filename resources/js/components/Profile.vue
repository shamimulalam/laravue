<template>
    <div>
        <div class="container mt-3">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card card-default">
                        <div class="card-header">
                            {{ $t("trans.profile.title") }}
                        </div>
                        <div class="card-body">
                            {{ $t("trans.profile.details") }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>