import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["apollo"]?: typeof import("nuxt-apollo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["directus"]?: typeof import("@bg-dev/nuxt-directus").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["nuxt-apollo", Exclude<NuxtConfig["apollo"], boolean>] | ["@bg-dev/nuxt-directus", Exclude<NuxtConfig["directus"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface PublicRuntimeConfig {
   apollo: {
      httpEndpoint: string,

      wsEndpoint: any,

      credentials: string,

      proxyCookies: boolean,
   },

   directus: {
      rest: {
         baseUrl: string,

         nuxtBaseUrl: string,
      },

      graphql: {
         enabled: boolean,

         httpEndpoint: string,
      },

      auth: {
         enabled: boolean,

         mode: string,

         msRefreshBeforeExpires: number,

         enableGlobalAuthMiddleware: boolean,

         refreshTokenCookieName: string,

         sessionTokenCookieName: string,

         loggedInFlagName: string,

         redirect: {
            home: string,

            login: string,

            logout: string,

            resetPassword: string,

            callback: string,
         },

         userFields: Array<string>,
      },
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }