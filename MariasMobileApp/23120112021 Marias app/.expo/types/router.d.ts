/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/modal`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/customer-profile` | `/customer-profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/order-transaction` | `/order-transaction`; params?: Router.UnknownInputParams; } | { pathname: `/components/AppButton`; params?: Router.UnknownInputParams; } | { pathname: `/models/Customer`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/modal`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/customer-profile` | `/customer-profile`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/order-transaction` | `/order-transaction`; params?: Router.UnknownOutputParams; } | { pathname: `/components/AppButton`; params?: Router.UnknownOutputParams; } | { pathname: `/models/Customer`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/modal${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/customer-profile${`?${string}` | `#${string}` | ''}` | `/customer-profile${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/order-transaction${`?${string}` | `#${string}` | ''}` | `/order-transaction${`?${string}` | `#${string}` | ''}` | `/components/AppButton${`?${string}` | `#${string}` | ''}` | `/models/Customer${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/modal`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/customer-profile` | `/customer-profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/order-transaction` | `/order-transaction`; params?: Router.UnknownInputParams; } | { pathname: `/components/AppButton`; params?: Router.UnknownInputParams; } | { pathname: `/models/Customer`; params?: Router.UnknownInputParams; };
    }
  }
}
