# Text Button

Just look like text.

```html
<n-button text>
  <template #icon>
    <n-icon>
      <train-icon />
    </n-icon>
  </template>
  The Engine is Still Spiting Smoke
</n-button>
```

```js
import { TrainOutline as TrainIcon } from '@vicons/ionicons5'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    TrainIcon
  }
})
```
