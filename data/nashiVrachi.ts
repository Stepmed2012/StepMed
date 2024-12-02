export interface IStaff {
  id: number;
  photoUrl: string;
  fullName: string;
  workPosition: string;
  description: string;
  education: string[];
  professionalCommunity?: string[];
  advancedTraining?: string[];
  publications?: string[];
  social?: {
    facebook?: string;
    vk?: string;
    linkedIn?: string;
    whatsapp?: string;
  };
}

export const staffDoctors: IStaff[] = [
  // {
  //   id: 0,
  //   photoUrl: '/images/staff/dolgov.jpg',
  //   fullName: 'Долгов Дмитрий Алексеевич',
  //   workPosition: 'Врач-онколог',
  //   description: '',
  //   education: [
  //     'ФГБВОУ ВПО "Военно-медицинская академия им. С.М. Кирова" Министерства обороны РФ – «лечебное дело» 2012г.',
  //     'ФГБОУ ВО "Северо-Западный государственный медицинский университет им. И.И. Мечникова" Министерства здравоохранения РФ – «Организация здравоохранения и общественное здоровье» 2014г.',
  //     'ГБОУ ВПО "Первый Санкт-Петербургский государственный медицинский университет имени академика И.П.Павлова" Министерства Здравоохранения РФ СПб «онкология» - 2019г.'
  //   ],
  //   professionalCommunity: [''],
  //   advancedTraining: [],
  //   publications: [],
  //   social: {},
  // },
  // {
  //   id: 2,
  //   photoUrl: '/images/staff/shadov.jpg',
  //   fullName: 'Шадов Виталий Сергеевич',
  //   workPosition: 'Врач-онколог',
  //   description: '',
  //   education: [
  //     'ГБОУ ВПО "Иркутский государственный медицинский университет" МЗ РФ г. Иркутск «Педиатрия» 2014г.',
  //     'ФГБОУ ДПО "Российская медицинская академия непрерывного профессионального образования" МЗ РФ г. Москва «онкология» 2017г.',
  //   ],
  //   professionalCommunity: [''],
  //   advancedTraining: [],
  //   publications: [],
  //   social: {},
  // },
  {
    id: 1,
    photoUrl: '',
    fullName: 'Аксенов Михаил Сергеевич',
    workPosition: 'Врач-онколог',
    description: '',
    education: [
      'ГБОУ ВПО "Первый Санкт-Петербургский государственный медицинский университет имени академика И.П.Павлова" Министерства Здравоохранения РФ СПб «Лечебное дело» 2010г.',
      'ФГБОУ "НМИЦ онкологии им. Н.Н. Петрова" МЗ РФ «онкология» 2010г.'
    ],
    professionalCommunity: [''],
    advancedTraining: [],
    publications: [],
    social: {},
  },
  {
    id: 2,
    photoUrl: '',
    fullName: 'Куткович Андрей Владимирович',
    workPosition: 'Врач-онколог',
    description: '',
    education: [
      'ФГБОУ ВО "Северо-Западный государственный медицинский университет им. И.И. Мечникова" Министерства здравоохранения РФ – лечебное дело» 2009г.',
      'ФГБУ "Национальный медицинский исследовательский центр онкологии им. Н.Н. Петрова" Министерства Здравоохранения РФ СПб «онкология» - 2013 г.'
    ],
    professionalCommunity: [''],
    advancedTraining: [],
    publications: [],
    social: {},
  }, {
    id: 3,
    photoUrl: '',
    fullName: 'Божанов Илья Александрович',
    workPosition: 'Врач-онколог',
    description: '',
    education: [
      'ФГБОУ ВО "Северо-Западный государственный медицинский университет им. И.И. Мечникова" Министерства здравоохранения РФ «лечебное дело» 2016г.',
      'ФГБОУ ВО "Северо-Западный государственный медицинский университет им. И.И. Мечникова" Министерства здравоохранения РФ «хирургия» 2019г.',
      'ООО "Многопрофильный Учебный Центр Дополнительного профессионального образования "Образовательный стандарт" «Организация здравоохранения и общественное здоровье» 2019 г.',
      'АНО ДПО "Центр повышения квалификации и профессиональной переподготовки" «онкология» 2021г.',
    ],
    professionalCommunity: [''],
    advancedTraining: [],
    publications: [],
    social: {},
  },
  {
    id: 4,
    photoUrl: '/images/staff/pasko.jpg',
    fullName: 'Паско Алексей Анатольевич',
    workPosition: 'Врач-онколог',
    description: '',
    education: [
      'Белорусский государственный медицинский университет "Врач-лечебник" 2005г.',
      'Белорусская медицинская академия постдипломного образования "онкология" 2017г.'
    ],
    professionalCommunity: [''],
    advancedTraining: [],
    publications: [],
    social: {},
  },

  {
    id: 6,
    photoUrl: '',
    fullName: 'Кузнецова Елена Ивановна',
    workPosition: 'Врач-терапевт, гастроэнтеролог',
    description: '',
    education: [
      'ГБОУ ВПО "Московский государственный медико-стоматологический университет им. А.И.Евдокимова" МЗ РФ г. Москва «лечебное дело» 2016г.',
      'ГБОУ ВПО "Московский государственный медико-стоматологический университет им. А.И.Евдокимова" МЗ РФ г. Москва «Терапия» 2018г.'
    ],
    professionalCommunity: [''],
    advancedTraining: [],
    publications: [],
    social: {},
  },{
    id: 7,
    photoUrl: '',
    fullName: 'Свистакова Мария Федоровна',
    workPosition: 'Медицинская сестра',
    description: '',
    education: [
      'ФГБОУ ВО "Петербургский государсвенный университет путей сообщения императора Александра I" г.Санкт-Петербурга «сестринское дело» 2017г.'
    ],
    professionalCommunity: [''],
    advancedTraining: [],
    publications: [],
    social: {},
  },{
    id: 8,
    photoUrl: '',
    fullName: 'Дагба Евгения Мергеновна',
    workPosition: 'Медицинская сестра',
    description: '',
    education: [
      'ГБОУ ВПО "Первый Санкт-Петербургский государственный медицинский университет имени академика И.П.Павлова" Министерства Здравоохранения РФ СПб «лечебное дело» 2019г.',
      '«Сестринское дело» 2019г.'
    ],
    professionalCommunity: [''],
    advancedTraining: [],
    publications: [],
    social: {},
  },{
    id: 9,
    photoUrl: '',
    fullName: 'Израилева Лилия Дмитриевна',
    workPosition: 'Медицинская сестра',
    description: '',
    education: [
      'ФГБВОУ ВПО "Военно-медицинская академия им. С.М. Кирова" Министерства обороны РФ «Сестринское дело» 2017г. '
    ],
    professionalCommunity: [''],
    advancedTraining: [],
    publications: [],
    social: {},
  }
];
