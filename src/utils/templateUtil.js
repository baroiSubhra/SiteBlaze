import TemplateImage1 from '@/assets/images/meetup-3.jpg'
import TemplateImage2 from '@/assets/images/restaurant.png'
export const templateDetails = [
  {
    tid: 1,
    name: 'Event Management Compny',
    title: 'Toofar Event Management',
    details:
      "An event management company's website with dedicated blog and projects section and an amazing footer",
    img: TemplateImage1,
    templateLink: '/portfolio-templates/template-1',
    leftButtonAction: () => {
      window.open('/portfolio-templates/template-1', '_blank')
    },
    content: {
      navigation: {
        show: true,
        brandName: {
          type: 'text',
          show: true,
          value: 'Toofar'
        },
        heroSection: {
          type: 'text',
          show: true,
          value: 'Home'
        },
        projectSection: {
          type: 'text',
          show: true,
          value: 'Projects'
        },
        aboutSection: {
          type: 'text',
          show: true,
          value: 'About'
        },
        missionSection: {
          type: 'text',
          show: true,
          value: 'Mission'
        },
        blogSection: {
          type: 'text',
          show: true,
          value: 'Blogs'
        },
        themeController: {
          type: 'boolean',
          show: true
        }
      },
      heroSection: {
        show: true,
        topHeading: {
          type: 'text',
          show: true,
          value: 'Award winning Company'
        },
        title: {
          type: 'text',
          show: true,
          value: 'Organise Your Next Meet Without Any Hastle.'
        },
        deatils: {
          type: 'text',
          show: true,
          value:
            'We specialize in organizing inperson as well as hybrid events, connect with us and we will help you find speakers and connect with sponsors.'
        },
        ctaButton: {
          type: 'text',
          show: true,
          value: 'Get in touch'
        },
        image: {
          type: 'url',
          show: true,
          value: TemplateImage1
        }
      },
      projectSection: {
        show: true,
        topHeading: {
          type: 'text',
          show: true,
          value: 'What all did we do'
        },
        title: {
          type: 'text',
          show: true,
          value: 'Here We Present to you our Flagship Projects'
        },
        deatils: {
          type: 'text',
          show: true,
          value:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
        },
        ctaButton: {
          type: 'text',
          show: true,
          value: 'Explore More Projects'
        }
      },
      aboutSection: {
        show: true,
        topHeading: {
          type: 'text',
          show: true,
          value: 'Who are we'
        },
        title: {
          type: 'text',
          show: true,
          value: '#1 Event Management Company in the World.'
        },
        deatils: {
          type: 'text',
          show: true,
          value:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
        },
        ctaButton: {
          type: 'text',
          show: true,
          value: 'Get in touch'
        },
        image: {
          type: 'url',
          show: true,
          value: TemplateImage1
        }
      },
      missionSection: {
        show: true,
        topHeading: {
          type: 'text',
          show: true,
          value: 'Our Mission and Goals'
        },
        title: {
          type: 'text',
          show: true,
          value: 'Ensure Each Meetup is Smooth and HassleFree'
        },
        deatils: {
          type: 'text',
          show: true,
          value:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
        },
        ctaButton: {
          type: 'text',
          show: true,
          value: 'Reach Out'
        },
        image: {
          type: 'url',
          show: true,
          value: TemplateImage1
        }
      },
      blogSection: {
        show: true,
        title: {
          type: 'text',
          show: true,
          value:
            'Here are some of our interesting blogs which can help you in organizing your next event.'
        }
      },
      ctaSection: {
        show: true,
        title: {
          type: 'text',
          show: true,
          value: 'Contact Us'
        },
        input1: {
          type: 'text',
          show: true,
          value: 'Enter Email.',
          placeholder: 'Enter Your Email'
        },
        input2: {
          type: 'text',
          show: true,
          value: 'Enter Phone No.',
          placeholder: 'Enter Your Phone No'
        },
        input3: {
          type: 'text',
          show: true,
          value: 'Enter Querry',
          placeholder: 'Enter Your Querry'
        },
        ctaButton: {
          type: 'text',
          show: true,
          value: 'Submit Querry'
        }
      },
      footer: {
        show: true,
        footerSection1: {
          show: true,
          brandName: {
            type: 'text',
            show: true,
            value: 'Toofar'
          },
          brandDetails: {
            type: 'text',
            show: true,
            value: 'An Event Management Company'
          }
        },
        footerSection2: {
          show: true,
          title: {
            type: 'text',
            show: true,
            value: 'Services'
          },
          child: {
            show: true,
            type: 'array',
            value: [
              {
                link: '#',
                value: 'Event Management'
              },
              {
                link: '#',
                value: 'Marketing'
              },
              {
                link: '#',
                value: 'Advertisement'
              },
              {
                link: '#',
                value: 'Contact us'
              }
            ]
          }
        },
        footerSection3: {
          show: true,
          title: {
            type: 'text',
            show: true,
            value: 'Company'
          },
          child: {
            show: true,
            type: 'array',
            value: [
              {
                link: '#',
                value: 'Event'
              },
              {
                link: '#',
                value: 'Contact us'
              },
              {
                link: '#',
                value: 'Privacy policy'
              },
              {
                link: '#',
                value: 'Terms of services'
              }
            ]
          }
        },
        footerSection4: {
          show: true,
          title: {
            type: 'text',
            show: true,
            value: 'Contact Us'
          },
          child: {
            show: true,
            type: 'array',
            value: [
              {
                link: '#',
                value: 'Somwhere in India'
              },
              {
                link: '#',
                value: 'Somewhere pincode'
              },
              {
                link: '#',
                value: '999 - 8888 - 777'
              },
              {
                link: '#',
                value: 'toofar.com@gmail.com'
              }
            ]
          }
        },
        footerSection5: {
          show: true,
          copyRightBrand: {
            type: 'text',
            show: true,
            value: 'Toofar'
          }
        }
      }
    }
  },
  {
    tid: 2,
    name: 'Michelin Star Restaurant',
    title: 'Michelin Star Restaurant Website',
    details:
      'A Michelin star restaurant website with dedicated blog and projects section and an amazing footer',
    img: TemplateImage2,
    templateLink: '/portfolio-templates/template-2',
    leftButtonAction: () => {
      window.open('/portfolio-templates/template-2', '_blank')
    },
    content: {
      navigation: {
        show: true,
        brandName: {
          type: 'text',
          show: true,
          value: 'Restaurantly'
        },
        heroSection: {
          type: 'text',
          show: true,
          value: 'Home'
        },
        projectSection: {
          type: 'text',
          show: true,
          value: 'Projects'
        },
        aboutSection: {
          type: 'text',
          show: true,
          value: 'About'
        },
        missionSection: {
          type: 'text',
          show: true,
          value: 'Mission'
        },
        blogSection: {
          type: 'text',
          show: true,
          value: 'Blogs'
        },
        themeController: {
          type: 'boolean',
          show: true
        }
      },
      heroSection: {
        show: true,
        topHeading: {
          type: 'text',
          show: true,
          value: 'Award winning Restaurant'
        },
        title: {
          type: 'text',
          show: true,
          value: 'Experience the Finest Cuisine With Restaurantly'
        },
        deatils: {
          type: 'text',
          show: true,
          value:
            'Indulge in a culinary journey like no other at Restaurantly. Our restaurant offers a delightful combination of exquisite flavors, impeccable service, and an enchanting ambiance that will leave you craving for more.'
        },
        ctaButton: {
          type: 'text',
          show: true,
          value: 'Get in touch'
        },
        image: {
          type: 'url',
          show: true,
          value: TemplateImage2
        }
      },
      projectSection: {
        show: true,
        topHeading: {
          type: 'text',
          show: true,
          value: 'What all do we do'
        },
        title: {
          type: 'text',
          show: true,
          value: 'Exquisite Services'
        },
        deatils: {
          type: 'text',
          show: true,
          value:
            "we specialize in creating unforgettable moments beyond the walls of our restaurant,Whether it's a wedding, corporate function, or social soirée, let us bring the flavors of Restaurantly to your next event."
        },
        ctaButton: {
          type: 'text',
          show: true,
          value: 'Explore More Projects'
        }
      },
      aboutSection: {
        show: true,
        topHeading: {
          type: 'text',
          show: true,
          value: 'Our Story'
        },
        title: {
          type: 'text',
          show: true,
          value: 'A Legacy of Culinary Excellence.'
        },
        deatils: {
          type: 'text',
          show: true,
          value:
            'we take immense pride in our rich culinary heritage that spans over decades. Our journey began with a vision to provide an exceptional dining experience to our guests, showcasing the flavors and traditions of our region.'
        },
        ctaButton: {
          type: 'text',
          show: true,
          value: 'Get in touch'
        },
        image: {
          type: 'url',
          show: true,
          value: TemplateImage2
        }
      },
      missionSection: {
        show: true,
        topHeading: {
          type: 'text',
          show: true,
          value: 'Our Mission and Goals'
        },
        title: {
          type: 'text',
          show: true,
          value: 'Creating Unforgettable Culinary Experiences'
        },
        deatils: {
          type: 'text',
          show: true,
          value:
            'Our mission is to create unforgettable culinary experiences that delight the senses and leave a lasting impression on our guests. We strive to be a beacon of excellence in the culinary world, showcasing the finest ingredients, innovative techniques, and impeccable service.'
        },
        ctaButton: {
          type: 'text',
          show: true,
          value: 'Reach Out'
        },
        image: {
          type: 'url',
          show: true,
          value: TemplateImage2
        }
      },
      blogSection: {
        show: true,
        title: {
          type: 'text',
          show: true,
          value: 'Culinary Chronicles - Discover the Latest Food Trends'
        }
      },
      ctaSection: {
        show: true,
        title: {
          type: 'text',
          show: true,
          value: 'Contact Us'
        },
        input1: {
          type: 'text',
          show: true,
          value: 'Enter Email.',
          placeholder: 'Enter Your Email'
        },
        input2: {
          type: 'text',
          show: true,
          value: 'Enter Phone No.',
          placeholder: 'Enter Your Phone No'
        },
        input3: {
          type: 'text',
          show: true,
          value: 'Enter Querry',
          placeholder: 'Enter Your Querry'
        },
        ctaButton: {
          type: 'text',
          show: true,
          value: 'Submit Querry'
        }
      },
      footer: {
        show: true,
        footerSection1: {
          show: true,
          brandName: {
            type: 'text',
            show: true,
            value: 'Restaurantly'
          },
          brandDetails: {
            type: 'text',
            show: true,
            value: 'A Michelin Star Restaurant'
          }
        },
        footerSection2: {
          show: true,
          title: {
            type: 'text',
            show: true,
            value: 'Services'
          },
          child: {
            show: true,
            type: 'array',
            value: [
              {
                link: '#',
                value: 'Dine in'
              },
              {
                link: '#',
                value: 'Take Away'
              },
              {
                link: '#',
                value: 'Catering'
              },
              {
                link: '#',
                value: 'Contact us'
              }
            ]
          }
        },
        footerSection3: {
          show: true,
          title: {
            type: 'text',
            show: true,
            value: 'Company'
          },
          child: {
            show: true,
            type: 'array',
            value: [
              {
                link: '#',
                value: 'Event'
              },
              {
                link: '#',
                value: 'Contact us'
              },
              {
                link: '#',
                value: 'Privacy policy'
              },
              {
                link: '#',
                value: 'Terms of services'
              }
            ]
          }
        },
        footerSection4: {
          show: true,
          title: {
            type: 'text',
            show: true,
            value: 'Contact Us'
          },
          child: {
            show: true,
            type: 'array',
            value: [
              {
                link: '#',
                value: 'Somwhere in India'
              },
              {
                link: '#',
                value: 'Somewhere pincode'
              },
              {
                link: '#',
                value: '999 - 8888 - 777'
              },
              {
                link: '#',
                value: 'restaurantly@gmail.com'
              }
            ]
          }
        },
        footerSection5: {
          show: true,
          copyRightBrand: {
            type: 'text',
            show: true,
            value: 'Restaurantly'
          }
        }
      }
    }
  }
]
