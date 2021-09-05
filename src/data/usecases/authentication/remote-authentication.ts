import { AuthenticationParams } from '@/domain/usecases/authentication'
import { HttpPostClient } from 'data/protocols/http'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly HttpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    await this.HttpPostClient.post({ url: this.url, body: params })
  }
}
