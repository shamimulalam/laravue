<template>
    <div class="locale-changer">
        <div class="input-group input-group-sm">
            <select class="form-control form-control-navbar" v-model="$i18n.locale">
                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
            </select>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'LocalChanger',
        data () {
            return { langs: ['bn', 'en'] }
        }
    }
</script>