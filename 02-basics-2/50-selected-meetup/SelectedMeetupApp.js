import { defineComponent, onMounted, ref, watch } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const MAX_MEETUP_ID = 5
    const selectedMeetupID = ref(1)
    const meetup = ref(null)

    const fetchMeetup = async () => {
      try {
        meetup.value = await getMeetup(selectedMeetupID.value)
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
      }
    }

    onMounted(() => {
      fetchMeetup()
    })

    watch(selectedMeetupID, fetchMeetup)

    return {
      MAX_MEETUP_ID,
      meetup,
      selectedMeetupID,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button 
          class="button button--secondary" 
          type="button" 
          :disabled="selectedMeetupID === 1"
          @click="selectedMeetupID--"
        >Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          
          <div v-for="index in MAX_MEETUP_ID" class="radio-group__button">
            <input
              :id="'meetup-id-' + index" 
              class="radio-group__input"
              type="radio"
              name="meetupId"
              @change="selectedMeetupID = index"
              :value="index"
              :checked="index === selectedMeetupID"
            />
            <label :for="'meetup-id-' + index" class="radio-group__label">{{ index }}</label>
          </div>

        </div>

        <button 
          class="button button--secondary" 
          type="button"
          :disabled="selectedMeetupID === 5"
          @click="selectedMeetupID++"
        >Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 v-if="meetup" class="meetup-cover__title">{{ meetup.title }}</h1>
        </div>
      </div>

    </div>
  `,
})
