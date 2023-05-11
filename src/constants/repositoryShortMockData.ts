import { IRepositoryShort } from '@/constants/repositoryShort'
import { ProgrammingLanguages } from './programmingLanguages'
import { RepositoryCategories } from './repositoryCategories'

export const mockRepositories: IRepositoryShort[] = [
  {
    name: 'axios',
    ownerName: 'axios',
    starCount: 78834,
    forkCount: 10216,
    issueCount: 205,
    contributorCount: 110,
    pullRequestCount: 57,
    programmingLanguage: ProgrammingLanguages.JavaScript,
    category: RepositoryCategories.CodeEditors
  },
  {
    name: 'tensorflow',
    ownerName: 'tensorflow',
    starCount: 160975,
    forkCount: 93458,
    issueCount: 11763,
    contributorCount: 2193,
    pullRequestCount: 1948,
    programmingLanguage: ProgrammingLanguages.Python,
    category: RepositoryCategories.MachineLearning
  },
  {
    name: 'kubernetes',
    ownerName: 'kubernetes',
    starCount: 76624,
    forkCount: 24079,
    issueCount: 10037,
    contributorCount: 2575,
    pullRequestCount: 1704,
    programmingLanguage: ProgrammingLanguages.Go,
    category: RepositoryCategories.Containerization
  },
  {
    name: 'react',
    ownerName: 'facebook',
    starCount: 179469,
    forkCount: 33779,
    issueCount: 1866,
    contributorCount: 1766,
    pullRequestCount: 596,
    programmingLanguage: ProgrammingLanguages.JavaScript,
    category: RepositoryCategories.CodeEditors
  },
  {
    name: 'ansible',
    ownerName: 'ansible',
    starCount: 47313,
    forkCount: 19283,
    issueCount: 3460,
    contributorCount: 1289,
    pullRequestCount: 1486,
    programmingLanguage: ProgrammingLanguages.Python,
    category: RepositoryCategories.Orchestration
  },
  {
    name: 'pandas',
    ownerName: 'pandas-dev',
    starCount: 31613,
    forkCount: 11781,
    issueCount: 1824,
    contributorCount: 845,
    pullRequestCount: 664,
    programmingLanguage: ProgrammingLanguages.Python,
    category: RepositoryCategories.Databases
  },
  {
    name: 'vscode',
    ownerName: 'microsoft',
    starCount: 121255,
    forkCount: 20867,
    issueCount: 1742,
    contributorCount: 659,
    pullRequestCount: 1573,
    programmingLanguage: ProgrammingLanguages.TypeScript,
    category: RepositoryCategories.IDEs
  },
  {
    name: 'flask',
    ownerName: 'pallets',
    starCount: 57471,
    forkCount: 15081,
    issueCount: 690,
    contributorCount: 406,
    pullRequestCount: 426,
    programmingLanguage: ProgrammingLanguages.Python,
    category: RepositoryCategories.PackageManagers
  },
  {
    name: 'webpack',
    ownerName: 'webpack',
    starCount: 56295,
    forkCount: 10066,
    issueCount: 732,
    contributorCount: 342,
    pullRequestCount: 269,
    programmingLanguage: ProgrammingLanguages.JavaScript,
    category: RepositoryCategories.BuildTools
  },
  {
    name: 'nginx',
    ownerName: 'nginx',
    starCount: 44523,
    forkCount: 11795,
    issueCount: 402,
    contributorCount: 356,
    pullRequestCount: 195,
    programmingLanguage: ProgrammingLanguages.C,
    category: RepositoryCategories.LoadBalancing
  },
  {
    name: 'kafka',
    ownerName: 'apache',
    starCount: 27368,
    forkCount: 11877,
    issueCount: 2480,
    contributorCount: 845,
    pullRequestCount: 803,
    programmingLanguage: ProgrammingLanguages.Java,
    category: RepositoryCategories.Networking
  },
  {
    name: 'eslint',
    ownerName: 'eslint',
    starCount: 18659,
    forkCount: 3445,
    issueCount: 550,
    contributorCount: 205,
    pullRequestCount: 111,
    programmingLanguage: ProgrammingLanguages.JavaScript,
    category: RepositoryCategories.CodeQuality
  },
  {
    name: 'prometheus',
    ownerName: 'prometheus',
    starCount: 30656,
    forkCount: 5186,
    issueCount: 710,
    contributorCount: 341,
    pullRequestCount: 365,
    programmingLanguage: ProgrammingLanguages.Go,
    category: RepositoryCategories.Monitoring
  },
  {
    name: 'mongodb',
    ownerName: 'mongodb',
    starCount: 16755,
    forkCount: 6066,
    issueCount: 248,
    contributorCount: 177,
    pullRequestCount: 120,
    programmingLanguage: ProgrammingLanguages.CPlusPlus,
    category: RepositoryCategories.Databases
  },
  {
    name: 'prettier',
    ownerName: 'prettier',
    starCount: 39364,
    forkCount: 1769,
    issueCount: 492,
    contributorCount: 189,
    pullRequestCount: 110,
    programmingLanguage: ProgrammingLanguages.JavaScript,
    category: RepositoryCategories.CodeQuality
  },
  {
    name: 'netty',
    ownerName: 'netty',
    starCount: 20881,
    forkCount: 9273,
    issueCount: 814,
    contributorCount: 307,
    pullRequestCount: 284,
    programmingLanguage: ProgrammingLanguages.Java,
    category: RepositoryCategories.Networking
  },
  {
    name: 'jupyter',
    ownerName: 'jupyter',
    starCount: 23167,
    forkCount: 8761,
    issueCount: 711,
    contributorCount: 301,
    pullRequestCount: 164,
    programmingLanguage: ProgrammingLanguages.Python,
    category: RepositoryCategories.Databases
  },
  {
    name: 'fastapi',
    ownerName: 'tiangolo',
    starCount: 32479,
    forkCount: 2583,
    issueCount: 273,
    contributorCount: 149,
    pullRequestCount: 148,
    programmingLanguage: ProgrammingLanguages.Python,
    category: RepositoryCategories.PackageManagers
  },
  {
    name: 'kibana',
    ownerName: 'elastic',
    starCount: 20125,
    forkCount: 6787,
    issueCount: 1887,
    contributorCount: 577,
    pullRequestCount: 366,
    programmingLanguage: ProgrammingLanguages.JavaScript,
    category: RepositoryCategories.Monitoring
  },
  {
    name: 'next.js',
    ownerName: 'vercel',
    starCount: 69577,
    forkCount: 7271,
    issueCount: 397,
    contributorCount: 184,
    pullRequestCount: 126,
    programmingLanguage: ProgrammingLanguages.TypeScript,
    category: RepositoryCategories.CodeEditors
  }
]
