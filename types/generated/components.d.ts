import type { Schema, Struct } from '@strapi/strapi';

export interface AssessmentOptionsOptions extends Struct.ComponentSchema {
  collectionName: 'components_assessment_options_options';
  info: {
    description: '';
    displayName: 'options';
    icon: 'bulletList';
  };
  attributes: {
    correct: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    number: Schema.Attribute.Integer & Schema.Attribute.Required;
    value: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface LinksLinks extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    assessments: Schema.Attribute.Relation<
      'oneToMany',
      'api::assessment.assessment'
    >;
    courses: Schema.Attribute.Relation<'oneToMany', 'api::course.course'>;
    exercises: Schema.Attribute.Relation<'oneToMany', 'api::exercise.exercise'>;
    modules: Schema.Attribute.Relation<'oneToMany', 'api::module.module'>;
    offer_letters: Schema.Attribute.Relation<
      'oneToMany',
      'api::offer-letter.offer-letter'
    >;
    pathways: Schema.Attribute.Relation<'oneToMany', 'api::pathway.pathway'>;
    prequizs: Schema.Attribute.Relation<'oneToMany', 'api::prequiz.prequiz'>;
    slugs: Schema.Attribute.Relation<'oneToMany', 'api::slug.slug'>;
  };
}

export interface OfferLetterManagementAttachments
  extends Struct.ComponentSchema {
  collectionName: 'components_offer_letter_management_attachments';
  info: {
    displayName: 'attachments';
    icon: 'link';
  };
  attributes: {
    files: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OfferLetterManagementEmail extends Struct.ComponentSchema {
  collectionName: 'components_offer_letter_management_emails';
  info: {
    displayName: 'email';
    icon: 'hashtag';
  };
  attributes: {
    email: Schema.Attribute.Email & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'assessment-options.options': AssessmentOptionsOptions;
      'links.links': LinksLinks;
      'offer-letter-management.attachments': OfferLetterManagementAttachments;
      'offer-letter-management.email': OfferLetterManagementEmail;
    }
  }
}
