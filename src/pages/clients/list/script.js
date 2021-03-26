import { BaseTable } from "@/components";

export default {
    name: "ColegioList",
    components: {BaseTable},
    data: function () {
        return {
          fields: [
            {key: 'name', label: 'Nombre'},
            {key: 'city', label: 'Departamento'},
            {key: 'years', label: 'Edad'},
            {key: 'nit', label: 'Nit'},
            {key: 'actions', label: 'Acciones'}
          ],
          clients: [{
            name:'Frank Orozco',
            city: 'Quetzaltenango',
            years: 33,
            nit: '483109-9',
            actions: ''
          },{
            name:'Frank Orozco',
            city: 'Quetzaltenango',
            years: 33,
            nit: '483109-9',
            actions: ''
          },{
            name:'Frank Orozco',
            city: 'Quetzaltenango',
            years: 33,
            nit: '483109-9',
            actions: ''
          },{
            name:'Frank Orozco',
            city: 'Quetzaltenango',
            years: 33,
            nit: '483109-9',
            actions: ''
          }
          ],
          isBusy: true
        }
      },
  created() {
  },
  methods : {
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
