import { MutationTree } from 'vuex'
import { State } from './state'

export enum MutationType {}

export type Mutations = {}

export const mutations: MutationTree<State> & Mutations = {}
