<template>
  <el-row type="flex" justify="space-between" align="middle" style="height: 40px;width: 100%">
    <el-col>
      <!-- 名称应该变成 对应的节点中的name -->
      <span>{{ treeNode.name }}</span>
    </el-col>
    <el-col :span="4">
      <el-row type="flex" justify="end">
        <!-- 两个内容 -->
        <el-col>{{ treeNode.manager }}</el-col>
        <el-col>
          <!-- 下拉菜单 element -->
          <el-dropdown @command="operateDepts">
            <span>
              操作<i class="el-icon-arrow-down" />
            </span>
            <!-- 下拉菜单 -->
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="add">添加子部门</el-dropdown-item>
              <el-dropdown-item v-if="!isRoot" command="edit">编辑部门</el-dropdown-item>
              <el-dropdown-item v-if="!isRoot" command="del">删除部门</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { delDepartments } from '@/api/departments'
export default {
  props: {
    treeNode: {
      type: Object,
      required: true
    },
    isRoot: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 点击添加、编辑、删除时触发
    operateDepts(type) {
      if (type === 'add') {
        // add
        this.$emit('addDepts', this.treeNode) // treeNode 代表当前部门的数据
      } else if (type === 'edit') {
        // edit
        this.$emit('editDepts', this.treeNode)
      } else {
        // del
        this.$confirm('确定要删除该部门吗').then(() => {
          return delDepartments(this.treeNode.id)
        }).then(() => {
          // 通知父亲更新数据
          this.$emit('delDepts')
          this.$message.success('删除部门成功')
        })
      }
    }
  }
}
</script>
