import React, {
  FocusEvent,
  FormEvent,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
import { useRouter } from 'next/router'
import RecommendationRow from '@/components/side-effects/CommandInterface/RecommendationRow'
import { MdArrowForward } from 'react-icons/md'
import { Project, useTrendingProjectsQuery } from '@/graphql/generated/gql'
import emailTemplate from '@/util/emailTemplate'
import { founderListMock } from '@/data/detailPageMocks'
import RecommendationRowType from './RecommendationRowType'
import defaultList from './DefaultRecommendationList'
import CommandInterfaceOptions from './CommandInterfaceOptions'

type CommandInterfaceProps = {
  action: (event: FocusEvent<HTMLInputElement> | null) => void
}

const CommandInterface: React.FC<CommandInterfaceProps> = ({ action }) => {
  const [searchWord, setSearchWord] = useState<string>('')
  const [recommendationList, setRecommendationList] = useState<RecommendationRowType[]>([])
  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const commandInterfaceWrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [{ data }] = useTrendingProjectsQuery()
  const projects = data?.projectCollection?.edges?.map((edge) => edge.node) as Project[]
  const [prevProjectRecommendationList, setPrevProjectRecommendationList] = useState<
    RecommendationRowType[]
  >([])
  const [isProjectListOn, setIsProjectListOn] = useState<boolean>(false)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        commandInterfaceWrapperRef.current &&
        !commandInterfaceWrapperRef.current.contains(event.target as Node)
      ) {
        action(null)
      }
    }
    if (recommendationList.length === 0) {
      setRecommendationList(defaultList)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useLayoutEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus()
    }
  }, [])

  const isCommandExistInList = (command: RecommendationRowType, word: string): boolean =>
    command.menuText.toLocaleLowerCase().includes(word.trim().toLocaleLowerCase())

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let search = event.target.value
    setSearchWord(search)
    if (search.trim() !== '' && !search.includes('>') && !search.includes('<')) {
      if (isProjectListOn) {
        search = defaultList
          .map((item) => item.menuText.toLocaleLowerCase())
          .includes(search.toLocaleLowerCase())
          ? ''
          : search.split(' ')[search.split(' ').length - 1]

        if (
          prevProjectRecommendationList.filter((rowItem) => isCommandExistInList(rowItem, search))
            .length === 0
        ) {
          setRecommendationList(defaultList)
          setIsProjectListOn(false)
          return
        }
        setRecommendationList(
          prevProjectRecommendationList.filter((rowItem) => isCommandExistInList(rowItem, search))
        )
      } else {
        setRecommendationList(
          defaultList.filter((rowItem) => isCommandExistInList(rowItem, search))
        )
      }
    } else if (search.trim() === '') {
      setIsProjectListOn(false)
      setRecommendationList(defaultList)
    }
  }

  const navigateTo = (path: string) => {
    void router.push(path)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const searchWordAsArray = searchWord.split(' ')
    if (searchWordAsArray.length > 1) {
      const commandName = isProjectListOn
        ? searchWordAsArray[searchWordAsArray.length - 1]
        : searchWordAsArray.slice(0, 2).join(' ')
      navigateTo(
        recommendationList.filter((row) =>
          row.menuText.toLocaleLowerCase().includes(commandName.toLocaleLowerCase())
        )[0].commandInterfaceOptions
      )
    } else {
      navigateTo(
        recommendationList.filter((row) =>
          row.menuText.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
        )[0].commandInterfaceOptions
      )
    }
  }

  const updateCommandInterface = (commandInterfaceOption: string, item: Project): string => {
    if (commandInterfaceOption.includes(':id')) {
      return commandInterfaceOption.replace(':id', item.id as string)
    }
    if (commandInterfaceOption.includes('mailto:')) {
      return emailTemplate(
        founderListMock[0].mail,
        founderListMock[0].name,
        founderListMock[0].company
      )
    }
    return '/' as string
  }

  const setProjectNamesAsRow = (commandInterfaceOption: string) => {
    if (projects !== undefined) {
      const newRecommendationList: RecommendationRowType[] = projects.map(
        (item: Project, index: number) => {
          const recommendationRow: RecommendationRowType = {
            Icon: MdArrowForward,
            menuText: (item.name as string) ?? (item.id as string),
            commandInterfaceOptions: updateCommandInterface(commandInterfaceOption, item),
            shortcutKey: index.toString(),
            shortcutKeyIcon: null
          }
          return recommendationRow
        }
      )
      setIsProjectListOn(true)
      setPrevProjectRecommendationList(newRecommendationList)
      setRecommendationList(newRecommendationList)
    }
  }

  const showConfirmationLines = () => {
    setSearchWord('Are you sure?')
    const yesLine: RecommendationRowType = {
      Icon: MdArrowForward,
      menuText: 'Yes',
      commandInterfaceOptions: CommandInterfaceOptions.Logout,
      isIdPrimary: false,
      shortcutKey: 'Yes',
      shortcutKeyIcon: null
    }
    const noLine: RecommendationRowType = {
      Icon: MdArrowForward,
      menuText: 'No',
      commandInterfaceOptions: CommandInterfaceOptions.GoHome,
      isIdPrimary: false,
      shortcutKey: 'No',
      shortcutKeyIcon: null
    }
    setRecommendationList([yesLine, noLine])
  }

  const rowClicked = (
    command: string,
    searchText: string,
    isIdPrimary: boolean,
    needConfirmation: boolean
  ) => {
    setSearchWord(searchText)
    if (needConfirmation) {
      showConfirmationLines()
    } else if (!isIdPrimary) {
      navigateTo(command)
      setIsProjectListOn(false)
      action(null)
    } else if (isIdPrimary) {
      setSearchWord(`${searchText} <project name>`)
      setProjectNamesAsRow(command)
    } else {
      setSearchWord('Please choose a project first.')
    }
  }

  return (
    <div
      className="fixed z-10 flex h-screen w-full items-start justify-center bg-black/50 shadow-lg"
      id="spotlight_wrapper"
    >
      <div ref={commandInterfaceWrapperRef} className="h-96 w-1/2">
        <form onSubmit={handleSubmit}>
          <input
            className="mt-28 block h-14 w-full appearance-none rounded-t-xl bg-gray-900 bg-left-bottom bg-no-repeat px-6
            py-10 shadow-lg outline-none placeholder:text-gray-600"
            onChange={(event) => searchHandler(event)}
            value={searchWord}
            autoComplete="off"
            spellCheck="false"
            type="text"
            id="spotlight"
            ref={inputRef}
            placeholder="Type a command or search..."
          />
        </form>
        <div className="h-0.5 bg-gray-600" />
        <ul className="h-full w-full overflow-y-auto rounded-b-xl bg-gray-900 bg-left-bottom bg-no-repeat shadow">
          {recommendationList.map((item, index) => (
            <RecommendationRow
              key={item.menuText}
              Icon={item.Icon}
              isHighlighted={index === 0 && searchWord !== ''}
              menuText={item.menuText}
              enableDivider={item.enableDivider}
              subtitle={item.subtitle}
              isProjectItem={isProjectListOn}
              ShortcutIcon={item.shortcutKeyIcon}
              rowClicked={() =>
                rowClicked(
                  item.commandInterfaceOptions,
                  item.menuText,
                  item.isIdPrimary ?? false,
                  item.needConfirmation ?? false
                )
              }
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CommandInterface