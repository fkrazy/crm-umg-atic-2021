import { BaseInput } from "@/components";


export default {
    name: "ColegioList",
    components: {BaseInput},
    data: function () {
        return {
          isBusy: true
        }
      },
  created() {
  },
  methods: {
    deleteCourse(snap) {
      this.$swal({
        title: 'Estas Seguro?',
        text: `Se va a eliminar el colegio ${snap.data().name}`,
        showCancelButton: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
          } catch (e) {
            alert('error')
          }
          snap.ref.delete()
        }
      })
    },
    validateSchool(snap) {
      this.$swal({
        title: 'Estas Seguro?',
        text: `Se va a validar el colegio ${snap.data().name}`,
        showCancelButton: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await snap.ref.update({state: 'validated'})
          this.$swal('Colegio Validado')
        }
      })
    }
  }
}
