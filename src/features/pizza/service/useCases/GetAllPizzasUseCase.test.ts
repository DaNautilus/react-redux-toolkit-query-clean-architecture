import { it, describe, expect } from 'vitest'
import PizzaApi from '../../infrastructure/PizzaApi'
import GetAllPizzasUseCase from './GetAllPizzasUseCase'

describe('service: GetAllPizzasUseCase', () => {
  it('should load all the pizzas from the api', async () => {
    const pizzaApi = new PizzaApi()
    const useCase = new GetAllPizzasUseCase(pizzaApi)

    const result = await useCase.execute()

    expect(result.isSuccess)
    expect(result.value().length).toBe(3)
    expect(result.value()[0].name).toBe('Hawaii')
  })
})
