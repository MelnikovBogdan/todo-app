import { LeftOutlined } from '@ant-design/icons'
import { useAuthStore } from 'shared/auth'
import { Button, Input, PageLayout, RangePicker, Textarea } from 'shared/ui'
import * as styles from './RootPage.module.css'

export function RootPage() {
  const { clearToken } = useAuthStore()
  return (
    <PageLayout>
      <div className={styles.header}>
        <div className={styles.userBadge}></div>
        <div className={styles.notificationButton}></div>
      </div>
      <p className={styles.goodMorningLabel}>Good morning!</p>
      <h1 className={styles.title}>
        Let's start a
        {' '}
        <br />
        {' '}
        <b>productive day</b>
      </h1>
      <Button

        onClick={clearToken}
      >
        <LeftOutlined />
      </Button>

      <div className="">
        <b>Daily progress</b>
        <div className="">
          <div className="">
            Hight priority
          </div>
          <div className="">
            <div className="">
              Completed
              12/13 Task
            </div>
            <div className="">
              In progress
              5 Task
            </div>
          </div>
        </div>
      </div>

      <Input
        label="Task title"
        placeholder="Task title"
      />

      <Textarea
        label="Task title"
        placeholder="Task title"
      />

      <RangePicker
        label="Task title"
      />
    </PageLayout>
  )
}
