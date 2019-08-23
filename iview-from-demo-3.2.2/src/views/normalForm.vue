<template>
  <Modal v-model="show" title="新增国际化信息" @on-ok="ok" :loading="loading"  :mask-closable="false">
    <Form ref="normalForm" :model="normalForm">
      <FormItem label="节点名称" prop="treeName" :rules="{required: true, message: '节点名称不能为空！', trigger: 'blur'}">
        <Input type="text" :maxlength=50 v-model="normalForm.treeName"
               placeholder="请输入国际化的节点名称"/>
      </FormItem>
      <FormItem label="节点编码" prop="treeCode" :rules="{required: true, message: '节点编码不能为空！', trigger: 'blur'}">
        <Input type="text" :maxlength=50 v-model="normalForm.treeCode"
               placeholder="请输入国际化的节点编码"/>
      </FormItem>
      <FormItem v-for="(item,index) in languages"
                :key="index"
                :label="item.name"
                :prop="item.code"
                :rules="{required: true, message: '国际化对应的值不能为空！', trigger: 'blur'}"
      >
        <Input type="text" :maxlength=100 v-model="normalForm[item.code]"
               placeholder="请输入国际化对应的值"/>
      </FormItem>
      <Button type="info" @click="resetForm">重置表单</Button>
    </Form>
  </Modal>
</template>
<script>
  export default {
    name: 'normalForm',
    data() {
      return {
        show: true,
        loading: true,
        normalForm: {
          treeName: '',
          treeCode: ''
        },
        languages: [

        ]
      }
    },
    methods: {
      ok() {
        console.log(JSON.stringify(this.normalForm))
        this.$refs['normalForm'].validate((valid) => {
          setTimeout(() => {
            this.loading = false;
            this.$nextTick(() => {
              this.loading = true;
            });
          }, 1000);
        })
      },
      resetForm(){
        console.log(JSON.stringify(this.normalForm))
        this.$refs['normalForm'].resetFields();
      }
    },
    mounted() {
      this.languages.push({
        id: '1',
        code: 'zh-CN',
        name: '简体中文'
      })
      this.languages.push({
        id: '2',
        code: 'zh-TW',
        name: '繁体中文'
      })
      this.languages.push({
        id: '1',
        code: 'en-US',
        name: '英文'
      })
    }
  }
</script>
