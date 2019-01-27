<template>
    <div>
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="img/profile.png" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <a href="#" class="d-block">{{ this.$store.state.auth.name }}</a>
            </div>
        </div>
        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library -->
                <li class="nav-item">
                    <router-link to="dashboard" class="nav-link">
                        <i class="fas fa-tachometer-alt"></i>
                        <p>
                            {{ $t('trans.mainMenu.dashboard')}}
                        </p>
                    </router-link>
                </li>
                <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                        <i class="fas fa-cogs"></i>
                        <p>
                            {{ $t('trans.mainMenu.management')}}
                            <i class="right fa fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <router-link to="users" class="nav-link">
                                <i class="fas fa-users"></i>
                                <p>{{ $t('trans.mainMenu.users')}}</p>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link to="/profile" class="nav-link">
                        <i class="fas fa-user"></i>
                        <p>{{ $t('trans.mainMenu.profile')}}</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="logout({
                title: $t('trans.alert.logout.title'),
                text: $t('trans.alert.logout.text'),
                confirmButtonText: $t('trans.alert.logout.confirmButtonText'),
                cancelButtonText: $t('trans.alert.logout.cancelButtonText'),
                })">
                        <i class="fas fa-power-off" ></i>
                        <p>{{ $t('trans.mainMenu.logout')}}</p>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
</template>

<script>
    export default {
        name: "MainMenu",

        created() {
            this.$store.dispatch("fetchAuth", { self: this })
        },
    }
</script>

<style scoped>

</style>