<template>
    <div>
        <div class="row mt-5">
            <div class="col-12">

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Users</h3>
                        <div class="card-tools">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#userModal">Add new</button>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div id="example1_wrapper">
                            <div class="row">
                                <div class="col-sm-12">
                                    <table id="example1" class="table table-bordered table-striped">
                                        <thead>
                                        <tr role="row">
                                            <th >ID</th>
                                            <th >Name</th>
                                            <th >Email</th>
                                            <th >Phone</th>
                                            <th >Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="user in users.data" :key="user.id">
                                            <td>{{ user.id }}</td>
                                            <td>{{ user.name }}</td>
                                            <td>{{ user.email }}</td>
                                            <td>{{ user.phone }}</td>
                                            <td>
                                                <router-link to="#">
                                                    <i class="fas fa-edit"></i>
                                                </router-link>
                                                <a href="#" @click="deleteUser(user.id)">
                                                    <i class="fas fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 col-md-5">
                                    <div class="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                                </div>
                                <div class="col-sm-12 col-md-7">
                                    <div class="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                                        <ul class="pagination">
                                            <li class="paginate_button page-item previous disabled" id="example1_previous">
                                                <a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0" class="page-link">Previous</a>
                                            </li>
                                            <li class="paginate_button page-item active">
                                                <a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0" class="page-link">1</a>
                                            </li>
                                            <li class="paginate_button page-item ">
                                                <a href="#" aria-controls="example1" data-dt-idx="2" tabindex="0" class="page-link">2</a>
                                            </li>
                                            <li class="paginate_button page-item ">
                                                <a href="#" aria-controls="example1" data-dt-idx="3" tabindex="0" class="page-link">3</a>
                                            </li>
                                            <li class="paginate_button page-item ">
                                                <a href="#" aria-controls="example1" data-dt-idx="4" tabindex="0" class="page-link">4</a>
                                            </li>
                                            <li class="paginate_button page-item ">
                                                <a href="#" aria-controls="example1" data-dt-idx="5" tabindex="0" class="page-link">5</a>
                                            </li>
                                            <li class="paginate_button page-item ">
                                                <a href="#" aria-controls="example1" data-dt-idx="6" tabindex="0" class="page-link">6</a>
                                            </li>
                                            <li class="paginate_button page-item next" id="example1_next">
                                                <a href="#" aria-controls="example1" data-dt-idx="7" tabindex="0" class="page-link">Next</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
            <!-- /.col -->
        </div>


        <div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="userModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="createUser" @keydown="form.onKeydown($event)">
                        <div class="modal-body">
                            <div class="form-group">
                                <input v-model="form.name" type="text" name="name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="Enter user name">
                                <has-error :form="form" field="name"></has-error>
                            </div>
                            <div class="form-group">
                                <select v-model="form.type" type="text" name="type" class="form-control" :class="{ 'is-invalid': form.errors.has('type') }" placeholder="Select user type">
                                    <option value="">Select user type</option>
                                    <option value="Admin">Admin</option>
                                    <option value="User">User</option>
                                </select>
                                <has-error :form="form" field="type"></has-error>
                            </div>
                            <div class="form-group">
                                <input v-model="form.phone" type="text" name="phone" class="form-control" :class="{ 'is-invalid': form.errors.has('phone') }" placeholder="Enter user phone">
                                <has-error :form="form" field="phone"></has-error>
                            </div>
                            <div class="form-group">
                                <input v-model="form.email" type="email" name="email" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" placeholder="Enter user email">
                                <has-error :form="form" field="email"></has-error>
                            </div>
                            <div class="form-group">
                                <input v-model="form.password" type="password" name="password" class="form-control" :class="{ 'is-invalid': form.errors.has('password') }" placeholder="Enter user password">
                                <has-error :form="form" field="password"></has-error>
                            </div>
                            <div class="form-group">
                                <textarea v-model="form.address" type="text" name="address" class="form-control" :class="{ 'is-invalid': form.errors.has('address') }" placeholder="Enter user address"> </textarea>
                                <has-error :form="form" field="address"></has-error>
                            </div>
                            <div class="form-group">
                                <textarea v-model="form.bio" type="text" name="bio" class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }" placeholder="Enter user bio"></textarea>
                                <has-error :form="form" field="bio"></has-error>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Create User</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Users",
        data(){
            return {
                form : new Form({
                    name : '',
                    phone : '',
                    email : '',
                    password : '',
                    address : '',
                    type : '',
                    photo : '',
                    bio : '',
                }),
                users: {},
            }
        },
        methods:{
            createUser: function(){
                this.$Progress.start();
                this.form.post('api/user').then(()=>{
                    Fire.$emit('CHANGE');
                    $('#userModal').modal('hide');
                    this.form.reset();
                    Toast.fire({
                        type: 'success',
                        title: 'User created successfully'
                    });
                }).catch(()=>{

                });
                this.$Progress.finish();

            },
            loadUsers: function () {
                this.$Progress.start();
                axios.get('api/user').then(({ data })=> {
                    if(data.code && data.code==111)
                    {
                        this.users= data.data;
                    }else{
                        Swal.fire(
                            'Unexpected error !',
                            data.details,
                            'warning'
                        )
                    }
                });
                this.$Progress.finish();
            },
            deleteUser: function (id) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        this.$Progress.start();
                        this.form.delete('api/user/' + id).then(({ data })=>{
                            if(data.code && data.code==111)
                            {
                                Fire.$emit('CHANGE');
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }else{
                                Swal.fire(
                                    'Unexpected error !',
                                    data.details,
                                    'warning'
                                )
                            }
                        }).catch(()=>{
                            Swal.fire(
                                'Failed!',
                                'Something went wrong',
                                'warning'
                            )
                        });
                        this.$Progress.finish();

                    }
                })
            }
        },
        created() {
            this.loadUsers();
            Fire.$on('CHANGE',()=> this.loadUsers());
            // setInterval(()=>this.loadUsers(),3000);
        }
    }
</script>

<style scoped>

</style>