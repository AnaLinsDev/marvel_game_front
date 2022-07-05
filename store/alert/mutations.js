export default {
    openAlert(state, alert) {
      state.alert.open = true
      state.alert.type = alert.type
      state.alert.message = alert.message
    },
    closeAlert(state) {
        state.alert.open = false
        state.alert.type = ''
        state.alert.message = ''
      },
  };
  