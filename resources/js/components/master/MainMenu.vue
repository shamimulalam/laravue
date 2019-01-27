<template>
    <div>
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
                <a class="nav-link" href="#" @click="logout()">
                    <i class="fas fa-power-off" ></i>
                    <p>{{ $t('trans.mainMenu.logout')}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MainMenu",
        methods: {
            logout: function () {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You want to logout!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Logout!'
                }).then((result) => {
                    if (result.value) {
                        this.$Progress.start();
                        console.log('starting point');
                        axios.post('logout').then(({ data })=>{
                            window.location.href = 'login';
                            this.$Progress.finish();
                        console.log('success point');
                        }).catch(()=>{
                            Swal.fire(
                                'Failed!',
                                'Something went wrong',
                                'warning'
                            );
                            this.$Progress.fail();
                        console.log('catch point');
                        });
                        console.log('Exit point');
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>