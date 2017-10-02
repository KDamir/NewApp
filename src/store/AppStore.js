import { observable, autorun } from 'mobx'
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge'

class AppStore {
  @observable username = ''
  @observable user = {}
  @observable post_count = 0
  @observable order_count = 0
  @observable chat_count = 0
  @observable new_messages = 0
  @observable current_page = ''
  @observable current_puid = ''
  @observable tracker = new GoogleAnalyticsTracker('UA-xxxx-x')
  @observable onesignal_app_id = "ed893aab-6b2e-4b67-8c78-ae834ab60107"
  @observable onesignal_api_key = "MTkxYThhMmMtNzJiNy00NWI4LTk5YWMtYjk1YzExNGViM2Jk"
}

const appStore = new AppStore()

/*
autorun(() => {
  console.log(appStore)
})
*/

export default appStore
