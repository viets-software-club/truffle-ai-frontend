import {
  DiJava,
  TbBrandGolang,
  TbBrandJavascript,
  TbBrandPython,
  TbBrandTypescript
} from 'react-icons/all'

interface IProps {
  programmingLanguage: string
}
export default function ProgrammingLanguageIconRenderer({ programmingLanguage }: IProps) {
  if (programmingLanguage === 'Go') return <TbBrandGolang className="h-6 w-6" />
  if (programmingLanguage === 'JavaScript') return <TbBrandJavascript className="h-6 w-6" />
  if (programmingLanguage === 'Java') return <DiJava className="h-6 w-6" />
  if (programmingLanguage === 'TypeScript') return <TbBrandTypescript className="h-6 w-6" />
  if (programmingLanguage === 'Python') return <TbBrandPython className="h-6 w-6" />
  return <p>{programmingLanguage}</p>
}
