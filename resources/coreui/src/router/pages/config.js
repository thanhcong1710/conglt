import u from '../../utilities/utility'
const ProductList = () => import('../../views/config/products/list')
const ProductAdd = () => import('../../views/config/products/add')
const ProductEdit = () => import('../../views/config/products/edit')
const BranchList = () => import('../../views/config/branches/list')
const BranchAdd = () => import('../../views/config/branches/add')
const BranchEdit = () => import('../../views/config/branches/edit')
const ClassList = () => import('../../views/config/classes/list')
const ClassAdd = () => import('../../views/config/classes/add')
const ClassEdit = () => import('../../views/config/classes/edit')
export default {
  router: {
    path: '/',
    name: 'Hệ Thống',
    component: {
      render (c) {
        return c('router-view')
      }
    },
    children: [
      {
        path: '/branches',
        name: 'Danh Sách Trung Tâm',
        component: BranchList
      },
      {
        path: '/branches/add',
        name: 'Thêm Mới Trung Tâm',
        component: BranchAdd
      },
      {
        path: '/branches/:id/edit',
        name: 'Cập Nhật Trung Tâm',
        component: BranchEdit
      },
      {
        path: '/classes',
        name: 'Danh Sách Lớp Học',
        component: ClassList
      },
      {
        path: '/classes/add',
        name: 'Thêm Mới Lớp Học',
        component: ClassAdd
      },
      {
        path: '/classes/:id/edit',
        name: 'Cập Nhật Lớp Học',
        component: ClassEdit
      },
      {
        path: '/products',
        name: 'Danh Sách Các Sản Phẩm',
        component: ProductList
      },
      {
        path: '/products/add',
        name: 'Thêm Mới Sản Phẩm',
        component: ProductAdd
      },
      {
        path: '/products/:id/edit',
        name: 'Cập Nhật Sản Phẩm',
        component: ProductEdit
      }
    ]
  }
}
