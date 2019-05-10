<template>
    <div class="locale-changer">
        <div class="input-group input-group-sm">
            <select class="form-control form-control-navbar" v-model="$i18n.locale">
                <option v-for="lang in this.$store.state.langs" :value="lang.slug">{{ lang.name }}</option>
            </select>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'LocalChanger',
        data () {
            return { langs: this.$store.state.langs }
        },
        created() {
            this.$store.dispatch("fetchLangs", { self: this })
        },
    }
</script>