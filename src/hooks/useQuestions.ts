import BadBoy from '../images/BadBoy.webp';
import YoungAdult from '../images/YoungAdult.webp';
import Romance from '../images/Romance.webp';
import Billionaire from '../images/Billionaire.webp';
import RoyalObsession from '../images/RoyalObsession.webp';
import Action from '../images/Action.webp';
import Werewolf from '../images/Werewolf.webp';
import { useTranslation } from 'react-i18next';

export const useQuestions = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      title: "What is your preferred language?",
      description: "Choose language",
      variants: ["English", "French", "German", "Spanish"],
      type: 'single-select',
    },
    {
      id: 2,
      title: t('question_2_title'),
      description: t('question_2_description'),
      variants: [
        { img: '👩', text: t('question_2_variant_1_text') },
        { img: '👨', text: t('question_2_variant_2_text') },
        { img: '😉', text: t('question_2_variant_3_text') },
      ],
      type: 'single-select-image',
    },
    {
      id: 3,
      title: t('question_3_title'),
      description: null,
      variants: [t('question_3_variant_1'), t('question_3_variant_2'), t('question_3_variant_3'), t('question_3_variant_4')],
      type: 'single-select',
    },
    {
      id: 4,
      title: t('question_4_title'),
      description: null,
      variants: [t('question_4_variant_1'), t('question_4_variant_2'), t('question_4_variant_3'), t('question_4_variant_4')],
      type: 'multiple-select',
    },
    {
      id: 5,
      title: t('question_5_title'),
      description: t('question_5_description'),
      variants: [
        { img: Werewolf, text: t('question_5_variant_1_text') },
        { img: Action, text: t('question_5_variant_2_text') },
        { img: RoyalObsession, text: t('question_5_variant_3_text') },
        { img: Billionaire, text: t('question_5_variant_4_text') },
        { img: Romance, text: t('question_5_variant_5_text') },
        { img: YoungAdult, text: t('question_5_variant_6_text') },
        { img: BadBoy, text: t('question_5_variant_7_text') },
      ],
      type: 'bubble',
    },
  ];
};
