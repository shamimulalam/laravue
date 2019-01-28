<template>
    <div>
        <div class="row mt-5">
            <div class="col-12">

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">{{ $t("trans.user.title") }}</h3>
                        <div class="card-tools">
                            <button type="button" class="btn btn-success" @click="createUserModal"><i class="fas fa-user-plus"></i> {{ $t("trans.button.addNew") }}</button>
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
                                            <th >{{ $t("trans.common.serial") }}</th>
                                            <th >{{ $t("trans.common.name") }}</th>
                                            <th >{{ $t("trans.common.email") }}</th>
                                            <th >{{ $t("trans.common.phone") }}</th>
                                            <th >{{ $t("trans.common.actions") }}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="user in users.data" :key="user.id">
                                            <td>{{ user.id }}</td>
                                            <td>{{ user.name }}</td>
                                            <td>{{ user.email }}</td>
                                            <td>{{ user.phone }}</td>
                                            <td>
                                                <a href="#" @click="editUserModal(user.id)">
                                                    <i class="fas fa-edit"></i>
                                                </a>
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
                                    <div class="dataTables_info" id="example1_info" role="status" aria-live="polite">{{ $t('trans.button.pagination.showing') }} {{ ((users.current_page-1)*users.per_page)+1 }} {{ $t('trans.button.pagination.to') }}
                                        <span v-if="users.current_page*users.per_page < users.total">{{ users.current_page*users.per_page }}</span>
                                        <span v-else>{{ users.total }}</span>
                                        {{ $t('trans.button.pagination.of') }} {{ users.total }} {{ $t('trans.button.pagination.entries') }}</div>
                                </div>
                                <div class="col-sm-12 col-md-7">
                                    <div>
                                        <pagination :data="users" @pagination-change-page="fetchUsers"></pagination>
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
                        <h5 class="modal-title" v-show="!editMode">Add User</h5>
                        <h5 class="modal-title" v-show="editMode">Edit User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editMode?updateUser():createUser()" @keydown="form.onKeydown($event)">
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
                            <button type="submit" v-show="!editMode" class="btn btn-primary">Create User</button>
                            <button type="submit" v-show="editMode" class="btn btn-primary">Update User</button>
                        </div>
                    </form>
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
                    id : '',
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
                editMode: false,
            }
        },
        methods:{
            createUserModal: function(){
                this.form.reset();
                this.editMode=false;
                $('#userModal').modal('show');

            },
            createUser: function(){
                this.$Progress.start();
                this.form.post('api/'+this.$i18n.locale+'/user').then(()=>{
                    Fire.$emit('CHANGE');
                    this.form.reset();
                    $('#userModal').modal('hide');
                    Toast.fire({
                        type: 'success',
                        title: 'User created successfully'
                    });
                    this.$Progress.finish();
                }).catch(()=>{
                    this.$Progress.fail();

                });

            },
            editUserModal:function (id) {
                this.editMode=true;
                this.$Progress.start();
                this.form.reset();
                axios.get('api/user/'+id).then(({ data })=> {
                    if(data.code && data.code==111)
                    {
                        this.form.fill(data.data);
                        $('#userModal').modal('show');
                    }else{
                        Swal.fire(
                            'Unexpected error !',
                            data.details,
                            'warning'
                        )
                    }
                    this.$Progress.finish();
                })
            },
            updateUser: function () {
                this.$Progress.start();
                this.form.put('api/user/'+ this.form.id)
                    .then(({ data })=>{
                        if(data.code && data.code == 111)
                        {
                            Fire.$emit('CHANGE');
                            this.form.reset();
                            $('#userModal').modal('hide');
                            Toast.fire({
                                type: 'success',
                                title: 'User updated successfully'
                            });
                        }else{
                            console.log('yes error happend');
                            Swal.fire(
                                'Unexpected error !',
                                data.details,
                                'warning'
                            )
                        }
                        this.$Progress.finish();
                    }).catch(()=>{
                        this.$Progress.fail();
                    });
            },
            fetchUsers: function (page = 0) {
                this.$Progress.start();
                axios.get('api/' + this.$i18n.locale + '/user?page='+page).then(({ data })=> {
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
                    this.$Progress.finish();
                });
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
                            this.$Progress.finish();
                        }).catch(()=>{
                            Swal.fire(
                                'Failed!',
                                'Something went wrong',
                                'warning'
                            );
                            this.$Progress.fail();
                        });

                    }
                })
            }
        },
        created() {
            this.fetchUsers();
            Fire.$on('CHANGE',()=> this.fetchUsers());
            // setInterval(()=>this.fetchUsers(),3000);
        }
    }
</script>

<style scoped>

</style>