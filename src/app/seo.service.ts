import {Injectable} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  seoResponse: any = {};

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {
  }

  private defaultSeo(pageName: string, seoResponse: any) {
    const seoDefaultTags = {dasboard: [], hero: []};
    seoResponse.forEach(defaultT => {
      if (defaultT.pageName === 'dasboardDefault') {
        const defaultTagDashboard = {
          meta: defaultT.seoDetails.meta ? defaultT.seoDetails.meta : '',
          link: defaultT.seoDetails.link ? defaultT.seoDetails.meta : '',
          title: defaultT.seoDetails.title ? defaultT.seoDetails.meta : ''
        };
        seoDefaultTags.dasboard.push(defaultTagDashboard);
      } else if (defaultT.pageName === 'heroDefault') {
        const defaultTagHero = {
          meta: defaultT.seoDetails.meta ? defaultT.seoDetails.meta : '',
          link: defaultT.seoDetails.link ? defaultT.seoDetails.meta : '',
          title: defaultT.seoDetails.title ? defaultT.seoDetails.meta : ''
        };
        seoDefaultTags.hero.push(defaultTagHero);
      }
    });
    return seoDefaultTags;
  }


  getSeo(pageName: string) {
    this.seoResponse = {
      pageDetails: [
        {
          pageName: 'dasboard',
          bannerText: '$100 USD off on T-Mobile phones',
          marketingBladePath: 'S3 path of well formed JSON',
          seoDetails: {
            title: 'dashboard json',
            h1: '',
            meta: [
              {
                name: 'title',
                property: '',
                content: 'dashboard of heros'
              },
              {
                name: 'description',
                property: '',
                content: 'dashboard with details of all the heros'
              },
              {
                name: 'keyword',
                property: '',
                content: 'dashboard hero1 | hero 2, '
              },
              {
                name: 'robots',
                property: '',
                content: 'index, follow'
              },
              {
                name: 'hello',
                property: 'og:url',
                content: 'https://hero-dashboard/'
              },
              {
                name: 'twitter:title',
                property: '',
                content: 'hero3 | hero 4'
              }
            ],
            link: [
              {
                rel: 'canonical',
                href: 'https://www.t-mobile.com/business',
                hreflang: ''
              },
              {
                rel: 'alternate',
                href: 'https://www.t-mobile.com/business',
                hreflang: 'en-us'
              },
              {
                rel: 'alternate',
                href: 'https://es.t-mobile.com/business',
                hreflang: 'es-us'
              }
            ]
          }
        },
        {
          pageName: 'dasboardDefault',
          bannerText: '$100 USD off on T-Mobile phones',
          marketingBladePath: 'S3 path of well formed JSON',
          seoDetails: {
            title: 'dashboard json default',
            h1: '',
            meta: [
              {
                name: 'title',
                property: '',
                content: 'default-dashboard'
              },
              {
                name: 'description',
                property: '',
                content: 'default-description'
              },
              {
                name: 'keyword',
                property: '',
                content: 'default heros'
              },
              {
                name: 'robots',
                property: '',
                content: 'index, follow'
              },
              {
                name: 'hello',
                property: 'og:url',
                content: 'localhost/dashboard/'
              },
              {
                name: 'twitter:title',
                property: '',
                content: 'twitter title default'
              }
            ],
            link: [
              {
                rel: 'canonical',
                href: 'https://www.t-mobile.com/business',
                hreflang: ''
              },
              {
                rel: 'alternate',
                href: 'https://www.t-mobile.com/business',
                hreflang: 'en-us'
              },
              {
                rel: 'alternate',
                href: 'https://es.t-mobile.com/business',
                hreflang: 'es-us'
              }
            ]
          }
        },
        {
          pageName: 'hero',
          bannerText: '$100 USD off on T-Mobile phones',
          marketingBladePath: 'S3 path of well formed JSON',
          seoDetails: {
            title: 'hero',
            h1: '',
            meta: [
              {
                name: 'hero json',
                property: '',
                content: 'hero json content'
              },
              {
                name: 'description',
                property: '',
                content: 'hero json description hero matched'
              },
              {
                name: 'keyword',
                property: '',
                content: 'hero page'
              },
              {
                name: 'robots',
                property: '',
                content: 'index, follow'
              },
              {
                name: 'hello',
                property: 'og:url',
                content: 'localhost:90090/hero'
              },
              {
                name: 'twitter:title',
                property: '',
                content: 'localhost:9000/hero/twitter'
              }
            ],
            link: [
              {
                rel: 'canonical',
                href: 'https://www.t-mobile.com/business',
                hreflang: ''
              },
              {
                rel: 'alternate',
                href: 'https://www.t-mobile.com/business',
                hreflang: 'en-us'
              },
              {
                rel: 'alternate',
                href: 'https://es.t-mobile.com/business',
                hreflang: 'es-us'
              }
            ]
          }
        },
        {
          pageName: 'heroDefault',
          bannerText: '$100 USD off on T-Mobile phones',
          marketingBladePath: 'S3 path of well formed JSON',
          seoDetails: {
            title: 'Cell Phones',
            h1: '',
            meta: [
              {
                name: 'title',
                property: '',
                content: 'Unlimited Plans, Cell Phones, Evolving 4G &amp; 5G Coverage | T-Mobile'
              },
              {
                name: 'description',
                property: '',
                content: 'We keep you connected to what you love. Explore our plans, ' +
                  'benefits, deals, and a stronger network that&#39;s paving the way for a 5G future'
              },
              {
                name: 'keyword',
                property: '',
                content: 'Phone, '
              },
              {
                name: 'robots',
                property: '',
                content: 'index, follow'
              },
              {
                name: 'hello',
                property: 'og:url',
                content: 'https://www.t-mobile.com/cell-phone/apple-iphone-11-pro-max?sku=190199380349'
              },
              {
                name: 'twitter:title',
                property: '',
                content: 'New Apple iPhone 11 Pro Max | 4 colors in 64GB, 128GB &amp; 256GB | T-Mobile'
              }
            ],
            link: [
              {
                rel: 'canonical',
                href: 'https://www.t-mobile.com/business',
                hreflang: ''
              },
              {
                rel: 'alternate',
                href: 'https://www.t-mobile.com/business',
                hreflang: 'en-us'
              },
              {
                rel: 'alternate',
                href: 'https://es.t-mobile.com/business',
                hreflang: 'es-us'
              }
            ]
          }
        }
      ]
    };

    const seoTags = [];
    const pageTitle = this.titleService.getTitle();
    const defaultSeoProperties = this.defaultSeo(pageTitle, this.seoResponse.pageDetails);
    let tags = {};
    this.seoResponse.pageDetails.forEach((pageRef) => {
      if (pageRef.pageName === pageName) {
        tags = {
          meta: pageRef.seoDetails.meta ? pageRef.seoDetails.meta : defaultSeoProperties[pageTitle][0].meta,
          link: pageRef.seoDetails.link ? pageRef.seoDetails.link : defaultSeoProperties[pageTitle][0].link,
          title: pageRef.seoDetails.title ? pageRef.seoDetails.title : defaultSeoProperties[pageTitle][0].title
        };
      }
    });
    seoTags.push(tags);
    let seoProperty = [];
    seoTags.forEach((property) => {
      this.titleService.setTitle(property.title);
      seoProperty = property.meta;
      if (seoProperty) {
        for (let i = 0; i <= seoProperty.length - 1; i++) {
          this.metaService.updateTag({
            name: seoProperty[i].name,
            property: seoProperty[i].property,
            content: seoProperty[i].content
          });
        }
      }
    });
  }

  // tslint:disable-next-line:prefer-for-of


  // for (const tagValue of Object.keys(seoProperty)) {
  //  this.metaService.updateTag({name: tagValue.name, property: tagValue.property, content: tagValue.content});
  // }
  // seoProperty.meta.forEach((tagValue) => {
  //     console.log(tagValue);
  // });


  init() {
    this.getSeo(this.titleService.getTitle());
  }


}
