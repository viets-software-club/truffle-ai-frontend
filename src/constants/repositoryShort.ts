import { ProgrammingLanguages } from './programmingLanguages'
import { RepositoryCategories } from './repositoryCategories'

export interface IRepositoryShort {
  name: string
  ownerName: string
  starCount: number
  forkCount: number
  issueCount: number
  contributorCount: number
  pullRequestCount: number
  programmingLanguage: ProgrammingLanguages
  category: RepositoryCategories
}
