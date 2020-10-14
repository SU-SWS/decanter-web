import Page from './page'
import RichTextField from "./utilities/RichTextField"
import ComponentNotFound from './component_not_found'
// Site Identity Elements
import GlobalFooter from './global/GlobalFooter'
import Lockup from './global/Lockup'
// Navigation Components
import PrimaryNavigation from './navigation/PrimaryNavigation'
// Layout Components
import Section from './layout/Section'
import OneColumn from './layout/OneColumn'
import TwoColumn from './layout/TwoColumn'
import ThreeColumn from './layout/ThreeColumn'
// Content Type Components
import BasicPage from './content-types/BasicPage'
import ComponentPage from './content-types/ComponentPage'
import HomePage from './content-types/HomePage'

const ComponentList = {
  page: Page,
  richTextField: RichTextField,
  globalFooter: GlobalFooter,
  lockup: Lockup,
  section: Section,
  oneColumn: OneColumn,
  twoColumn: TwoColumn,
  threeColumn: ThreeColumn,
  basicPage: BasicPage,
  componentPage: ComponentPage,
  homePage: HomePage,
  primaryNav: PrimaryNavigation,
  WYSIWYG: RichTextField,
}

const Components = (type) => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components
