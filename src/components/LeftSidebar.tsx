import {
  FiBookOpen as BookOpen,
  FiCompass as Compass,
  FiBookmark as Bookmark
} from 'react-icons/fi'
import router from 'next/router'
import MenuItem from './MenuItem'

const handleClick = (string: string) => {
  async function navigate() {
    await router.push(`/${string}`)
  }
  navigate().then(
    () => {
      console.log('Navigation successful!')
    },
    () => {
      console.error('Navigation failed with error:')
    }
  )
}

const LeftSidebar = () => (
  <div className="fixed left-0 top-0 flex h-screen min-h-screen w-56 flex-col justify-between border-r border-border">
    <div>
      <div className="flex w-full items-center justify-between px-7 py-2.5 text-textPrimary">
        <span className="mr-2">TruffleAI</span>
        <div className="h-[30px] w-[30px] rounded-[5px] bg-gray-500" />
      </div>

      <div className="border-t border-solid border-border py-2.5 text-14 font-normal leading-4 text-textPrimary">
        <h1 className="px-7 py-2.5 ">Overview</h1>
        <div className="px-2">
          <MenuItem Icon={Compass} text="All projects" onClick={() => handleClick('')} showIcon />
          <MenuItem
            Icon={Bookmark}
            text="Saved projects"
            onClick={() => handleClick('')}
            showIcon
          />
        </div>
      </div>
      <div className="border-t border-solid border-border py-2.5 text-14 font-normal leading-4 text-textPrimary">
        <h1 className="px-7 py-2.5 ">Saved searches</h1>
        <div className="px-2">
          <MenuItem
            Icon={Compass}
            text="JavaScript Frameworks"
            onClick={() => handleClick('')}
            showIcon={false}
          />
          <MenuItem
            Icon={Bookmark}
            text="Static Site Generators"
            onClick={() => handleClick('')}
            showIcon={false}
          />
          <MenuItem
            Icon={Bookmark}
            text="Infrastructure"
            onClick={() => handleClick('')}
            showIcon={false}
          />
          <MenuItem
            Icon={Bookmark}
            text="Dev Tools"
            onClick={() => handleClick('')}
            showIcon={false}
          />
          <MenuItem
            Icon={Bookmark}
            text="Machine Learning"
            onClick={() => handleClick('')}
            showIcon={false}
          />
        </div>
      </div>
    </div>
    <div className="border-t border-solid border-border">
      <MenuItem
        Icon={BookOpen}
        text="Help & Support"
        onClick={() => handleClick('documentation')}
        showIcon
      />
    </div>
  </div>
)

export default LeftSidebar
