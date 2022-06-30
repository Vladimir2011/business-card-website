import { GetterTree } from "vuex"
import {
  CategoryItem,
  LinkItem,
  ProjectItem,
  SkillItem,
  State
} from './state'

export type Getters = {
  getApp(state: State): string
  getLinks(state: State): LinkItem[],
  getCategories(state: State): CategoryItem[],
  getSkills(state: State): SkillItem[],
  getCommerceProjects(state: State): ProjectItem[],
  getPetProjects(state: State): ProjectItem[],
}

export const getters: GetterTree<State, State> & Getters = {
  getApp(state: State) {
    return state.app.title
  },
  getLinks(state: State) {
    return state.links
  },
  getCategories(state: State) {
    return state.categories
  },
  getSkills(state: State) {
    return state.skills
  },
  getCommerceProjects(state: State) {
    return state.commerceProjects
  },
  getPetProjects(state: State) {
    return state.petProjects
  }
}
