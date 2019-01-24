<template>
    <div>
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library -->
            <li class="nav-item">
                <router-link to="dashboard" class="nav-link">
                    <i class="fas fa-tachometer-alt"></i>
                    <p>
                        {{ $t('message.mainMenu.dashboard')}}
                    </p>
                </router-link>
            </li>
            <li class="nav-item has-treeview">
                <a href="#" class="nav-link">
                    <i class="fas fa-cogs"></i>
                    <p>
                        {{ $t('message.mainMenu.management')}}
                        <i class="right fa fa-angle-left"></i>
                    </p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link to="users" class="nav-link">
                            <i class="fas fa-users"></i>
                            <p>{{ $t('message.mainMenu.users')}}</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <router-link to="/profile" class="nav-link">
                    <i class="fas fa-user"></i>
                    <p>{{ $t('message.mainMenu.profile')}}</p>
                </router-link>
            </li>
            <!--<li class="nav-item">
                <a class="nav-link" href="{{ route('logout') }}"
                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                    <i class="fas fa-power-off" ></i>
                    <p>Logout</p>
                </a>

                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    @csrf
                </form>
            </li>-->
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MainMenu"
    }
</script>

<style scoped>

</style>