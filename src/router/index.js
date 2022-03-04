import { createRouter, createWebHistory } from 'vue-router';
import TabsView from '/@/layouts/tabs/TabsView.vue';
import BlankView from '/@/layouts/BlankView.vue';
const routes = [{
        path: '/login',
        name: 'Login',
        component: () =>
            import ('/@/views/login/Login.vue')
    },
    {
        path: '/',
        name: '首頁',
        component: TabsView,
        meta: {
            title: 'Home'
        },
        redirect: '/demo/test',
        children: [{
                name: 'versionTable',
                path: '/versionTable',
                meta: {
                    title: 'Version & Status',
                    icon: 'dashboard'
                },
                component: () =>
                    import ('/@/views/versionTable/VersionTable.vue')
            },
            {
                name: 'changePassword',
                path: '/changePassword',
                meta: {
                    title: 'ChangePassword',
                    icon: 'dashboard'
                },
                component: () =>
                    import ('/@/views/user/changePwd.vue')
            },
            {
                path: 'user',
                name: 'user',
                meta: {
                    title: 'User',
                    icon: 'dashboard'
                },
                component: BlankView,
                children: [{
                    path: 'userList',
                    name: 'userList',
                    meta: {
                        title: 'userList',
                        page: {
                            closable: false
                        }
                    },
                    component: () =>
                        import ('/@/views/user/userList.vue')
                }]
            },
            {
                path: 'demo',
                name: 'demo',
                meta: {
                    title: 'Demo',
                    icon: 'dashboard'
                },
                component: BlankView,
                children: [{
                    path: 'test',
                    name: 'test',
                    meta: {
                        title: 'test',
                        page: {
                            closable: false
                        }
                    },
                    component: () =>
                        import ('/@/views/demo/echarts-test.vue')
                }]
            },
            {
                name: 'role',
                path: '/role',
                meta: {
                    title: 'role',
                    icon: 'user'
                },
                component: () =>
                    import ('/@/views/role/role.vue')
            },
            {
                name: 'setting',
                path: '/setting',
                meta: {
                    title: 'setting',
                    icon: 'setting'
                },
                component: () =>
                    import ('/@/views/setting/setting.vue')
            },
            {
                path: 'versionlist',
                name: 'versionlist',
                meta: {
                    title: 'Version List',
                    icon: 'dashboard'
                },
                component: BlankView,
                children: [{
                        path: 'demandStatus',
                        name: 'demandStatus',
                        meta: {
                            title: 'Demand Status',
                            page: {
                                closable: false
                            }
                        },
                        component: () =>
                            import ('/@/views/versionTable/VersionTable.vue')
                    },
                    {
                        path: 'othersInputStatus',
                        name: 'othersInputStatus',
                        meta: {
                            title: 'Others Input',
                            page: {
                                closable: false
                            }
                        },
                        component: () =>
                            import ('/@/views/versionTable/OthersInput.vue')
                    }
                ]
            },
            {
                path: 'uploadfile',
                name: 'uploadfile',
                meta: {
                    title: 'Upload File',
                    icon: 'dashboard'
                },
                component: BlankView,
                children: [{
                        path: 'uploadOthersInput',
                        name: 'uploadOthersInput',
                        meta: {
                            title: 'Upload Others Input',
                            page: {
                                closable: false
                            }
                        },
                        component: () =>
                            import ('/@/views/uploadFileConfirm/UploadOthers.vue')
                    },
                    {
                        path: 'uploadDemandFile',
                        name: 'uploadDemandFile',
                        meta: {
                            title: 'Upload Demand File',
                            page: {
                                closable: false
                            }
                        },
                        component: () =>
                            import ('/@/views/uploadFileConfirm/UploadFileConfirm.vue'),
                    },
                    {
                        path: 'uploadMPS',
                        name: 'uploadMPS',
                        meta: {
                            title: 'Upload MPS File',
                            page: {
                                closable: false
                            }
                        },
                        component: () =>
                            import ('/@/views/uploadFileConfirm/UploadDemandMinMax.vue')
                    }
                ]
            },

            {
                name: 'uploadMachineInfo',
                path: '/uploadMachineInfo',
                meta: {
                    title: 'Upload Machine Info',
                    icon: 'dashboard'
                },
                component: () =>
                    import ('/@/views/uploadFileConfirm/UploadMachineInfo.vue')
            },

            {
                name: 'uploadAVL',
                path: '/uploadAVL',
                meta: {
                    title: 'Upload AVL',
                    icon: 'dashboard'
                },
                component: () =>
                    import ('/@/views/uploadFileConfirm/UploadAVL.vue')
            },
            {
                name: 'uploadENG',
                path: '/uploadENG',
                meta: {
                    title: 'Upload ENG',
                    icon: 'dashboard'
                },
                component: () =>
                    import ('/@/views/uploadFileConfirm/UploadENG.vue')
            },

            {
                path: 'demandConfirmationSimulation',
                name: 'demandConfirmationSimulation',
                meta: {
                    icon: 'dashboard',
                    title: 'Demand Confirmation Simulation',
                },
                component: BlankView,
                children: [{
                        path: 'DCSIndex',
                        name: 'DCSIndex',
                        meta: {
                            title: 'DataResult',
                            page: {
                                closable: false
                            }
                        },
                        component: () =>
                            import ('/@/views/demandConfirmation/index.vue'),
                    },
                    {
                        path: 'forecastoutputdate',
                        name: 'forecastoutputdate',
                        meta: {
                            title: 'Forecast Output Date',
                            page: {
                                closable: false
                            }
                        },
                        component: () =>
                            import ('/@/views/demandConfirmation/ForecastOutput.vue'),
                    },
                    {
                        path: 'forecastmove',
                        name: 'forecastmove',
                        meta: {
                            title: 'Forecast Move',
                            page: {
                                closable: false
                            }
                        },
                        component: () =>
                            import ('/@/views/demandfulfillment/ForecastMoveForward.vue'),
                    },
                    {
                        path: 'forecastdailyoutput',
                        name: 'forecastdailyoutput',
                        meta: {
                            title: 'Forecast Daily Output',
                            page: {
                                closable: false
                            }
                        },
                        component: () =>
                            import ('/@/views/demandfulfillment/ForecastOutputForward.vue'),
                    },
                    {
                        path: 'machineloading',
                        name: 'machineloading',
                        meta: {
                            title: 'Machine Loading',
                            page: {
                                closable: false
                            }
                        },
                        component: () =>
                            import ('/@/views/demandConfirmation/MachineLoading.vue'),
                    },
                    {
                        path: 'inlinecycletimeforproductlayer',
                        name: 'inlinecycletimeforproductlayer',
                        meta: {
                            title: 'In Line CycleTime For Product Layer',
                            page: {
                                closable: false
                            }
                        },
                        component: () =>
                            import ('/@/views/demandConfirmation/InLineCycleTime.vue'),
                    },
                    {
                        path: 'inlinecycletimeforfactory',
                        name: 'inlinecycletimeforfactory',
                        meta: {
                            title: 'In Line CycleTime For Factory',
                            page: {
                                closable: false
                            }
                        },
                        component: () =>
                            import ('/@/views/demandConfirmation/InLineCycleTimeByFab.vue'),
                    }
                ]
            },
            {
                path: 'optimalDemandConfirmation',
                name: 'optimalDemandConfirmation',
                meta: {
                    title: 'Optimal Demand Confirmation',
                    icon: 'dashboard'
                },
                component: BlankView,
                children: [{
                    path: 'ODCIndex',
                    name: 'ODCIndex',
                    meta: {
                        title: 'DataResult',
                        page: {
                            closable: false
                        }
                    },
                    component: () =>
                        import ('/@/views/optimalDemandConfirmation/index.vue'),
                }]
            },

            {
                path: 'mpssimulation',
                name: 'MPSSimulation',
                meta: {
                    title: 'MPS Simulation',
                    icon: 'dashboard'
                },
                component: BlankView,
                children: [{
                    path: 'MPSIndex',
                    name: 'MPSIndex',
                    meta: {
                        title: 'DataResult',
                        page: {
                            closable: false
                        }
                    },
                    component: () =>
                        import ('/@/views/mpsSimulation/index.vue'),
                }, {
                    path: 'bankflowin',
                    name: 'bankflowin',
                    meta: {
                        title: 'Bank Flow In',
                        page: {
                            closable: false
                        }
                    },
                    component: () =>
                        import ('/@/views/versionTable/BankFlowIn.vue'),
                }, {
                    path: 'mpsuploadothers',
                    name: 'mpsuploadothers',
                    meta: {
                        title: 'Upload Other Input',
                        page: {
                            closable: false
                        }
                    },
                    component: () =>
                        import ('/@/views/mpsSimulation/UploadOthers.vue'),
                }]
            },
            {
                path: 'demandFulfillment',
                name: 'demandFulfillment',
                meta: {
                    title: 'Demand Fulfillment',
                    icon: 'dashboard'
                },
                component: BlankView,
                children: [{
                        path: 'index',
                        name: 'index',
                        meta: {
                            title: 'DataResult',
                            page: {
                                closable: false
                            }
                        },
                        component: () =>
                            import ('/@/views/demandfulfillment/index.vue'),
                    },
                    {
                        path: 'targetmove',
                        name: 'targetmove',
                        meta: {
                            title: 'Target Move',
                            page: {
                                closable: false
                            }
                        },
                        component: () =>
                            import ('/@/views/demandfulfillment/TargetMove.vue'),
                    },
                    {
                        path: 'machineloadingfortarget',
                        name: 'machineloadingfortarget',
                        meta: {
                            title: 'Machine Loading For Target',
                            page: {
                                closable: false
                            }
                        },
                        component: () =>
                            import ('/@/views/demandfulfillment/MachineLoadingForTargetMove.vue'),
                    }
                ]
            },
            {
                path: 'optimalPM',
                name: 'optimalPM',
                meta: {
                    title: 'Optimal PM',
                    icon: 'dashboard'
                },
                component: BlankView,
                children: [{
                    path: 'PMIndex',
                    name: 'PMIndex',
                    meta: {
                        title: 'Index',
                        page: {
                            closable: false
                        }
                    },
                    component: () =>
                        import ('/@/views/optimalPM/index.vue'),
                }]
            },
            {
                path: 'redunantWIP',
                name: 'redunantWIP',
                meta: {
                    title: 'Redunant WIP',
                    icon: 'dashboard'
                },
                component: BlankView,
                children: [{
                    path: 'RedunantIndex',
                    name: 'RedunantIndex',
                    meta: {
                        title: 'Index',
                        page: {
                            closable: false
                        }
                    },
                    component: () =>
                        import ('/@/views/redundantWIP/index.vue'),
                }]
            },
            {
                path: 'moveGapDetractor',
                name: 'moveGapDetractor',
                meta: {
                    title: 'Move Gap Detractor',
                    icon: 'dashboard'
                },
                component: BlankView,
                children: [{
                    path: 'DMAIndex',
                    name: 'DMAIndex',
                    meta: {
                        title: 'Index',
                        page: {
                            closable: false
                        }
                    },
                    component: () =>
                        import ('/@/views/movegapdetractor/index.vue'),
                }]
            },
        ]
    },
];

export default createRouter({
    history: createWebHistory("/"),
    routes,
});