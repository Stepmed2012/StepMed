import Link from "next/link";

const DostupnayaSreda = () => (
  <div className="container">
    <h1>Доступная среда</h1>
    <img src="/images/illustrations/dostup-sreda.webp" alt=''/>
    <p className="custom-text">
      <a
        href="https://www.gov.spb.ru/static/writable/ckeditor/uploads/2020/12/09/08/%D0%9F%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%B0_%D0%A0%D0%A4_%D0%BE%D1%82_29_03_2019_N_363_%D1%80%D0%B5%D0%B4__%D0%BE%D1%82.rtf"
        target="_blank"
        className="custom-text-link"
      >
        Постановлением Правительства РФ от 29.03.2019 №363
      </a> утверждена государственная программа «Доступная среда». Госпрограмма «Доступная среда» направлена на создание
      правовых, экономических и институциональных условий, способствующих интеграции инвалидов в общество и повышению
      уровня их жизни.
    </p>
    <p className="custom-text">
      Одним из главных принципов охраны здоровья является доступность медицинской помощи. Согласно государственным
      принципам и нормативным документам каждый пациент имеет право на получение медицинской помощи в доступном для него
      формате. В Степмед Клиник созданы оптимальные условия для того, чтобы маломобильные группы населения могли
      беспрепятственно получать доступную и качественную медицинскую помощь.
    </p>
    <p className="custom-text">
      В Степмед Клиник созданы условия для оказания медицинской помощи различным категориям инвалидов:
    </p>
    <div className="mt-2 flex justify-center">
      <img src="/images/illustrations/icons-sreda.png" alt=""/>
    </div>
    <div className="custom-list">
      <p className="custom-list-heading">
        С целью создания комфортных условий в клинике выполнены следующие мероприятия:
      </p>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Входная группа Организации оборудована тактильно-визуальными знаками и кнопкой вызова персонала для помощи
          инвалидам на креслах-колясках без сопровождения.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Вход в Организацию и начала лестничных пролетов выложены тактильной плиткой для оповещения инвалидов по
          зрению.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Ступени на лестнице выделены специальной маркировочной лентой с абразивным противоскользящим покрытием.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>При входе в клинику сопровождающие могут обратиться к сотрудникам для получения кресел-колясок.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Имеется отдельная санитарно-гигиеническая комната для маломобильной группы лиц, промаркированная
          тактильно-визуальными знаками.</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>В Организации на этапе согласования проекта установка лифта для маломобильной группы лиц.</p>
      </div>
    </div>
    <p className="custom-text">
      Если Вы намерены посетить ООО «Степмед Клиник»- предварительно позвоните, пожалуйста, по телефонам для записи на
      прием и сообщите информацию о том, что Вам будет нужна помощь в преодолении ступеней Вас встретят сотрудники,
      которые помогут доставить Вас к требуемым кабинетам и, по окончанию визита, обратно. Если Вы не позвонили
      предварительно – воспользуйтесь кнопкой вызова персонала, расположенной на стойке слева от входной двери и
      обозначенной специальным знаком. Ответственный за сопровождение и оказание помощи инвалидам при предоставлении
      услуг является дежурный администратор, который постоянно находится на ресепшене. Вызвать администратора можно по
      кнопке при входе в клинику или позвонив по номеру телефона +7 (812) 219 50 27.
    </p>
    <p className="custom-text">
      Получить необходимую информацию или записаться на прием лица с ограниченными возможностями могут по телефону: +7
      (812) 219-50-27 или на сайте.
    </p>
    <div className="mt-6">
      <h2 className="custom-list-heading">Контакты:</h2>

      <p className="custom-text">г. Санкт-Петербург, Большеохтинский проспект, д.16 к.1 пом 7Н/15Н</p>
      <p className="custom-text">Телефон: +7 (812) 219 50 27</p>
      <p className="custom-text"> Электронная почта: clinic@step-med.com</p>
      <p className="custom-text"> Режим работы: ежедневно с 9:00 до 19:00</p>
    </div>
    <div className="mt-6">
      <h2 className="custom-list-heading">Как к нам добраться</h2>
      <div className="grid grid-cols-1 gap-1 justify-center w-full">
        <img
          className="custom-accordion-img"
          src="/images/contacts/C01.webp"
          alt="маршрут от метро Чернышевская"
        />
        <img
          className="custom-accordion-img"
          src="/images/contacts/L01.webp"
          alt="маршрут от метро Ладожская"
        />
        <img
          className="custom-accordion-img"
          src="/images/contacts/P01.webp"
          alt="маршрут от метро Площадь Ленина"
        />
      </div>


      <p className="custom-text">
        На всем пути следования от метро, присутствуют светофоры с индикаторами обратного отсчета и звуковым
        обозначением. Бордюры оборудованы заниженными переходами для маломобильной группы населения
      </p>
      <div className="grid grid-cols-1 gap-1 justify-center w-full">
        <img src="/images/contacts/map1.webp" className="w-1/2 ml-auto mr-auto" alt="карта маршрута"/>
        <img src="/images/contacts/map2.webp" className="w-1/2 ml-auto mr-auto" alt="карта маршрута"/>
        <img src="/images/contacts/map3.webp" className="w-1/2 ml-auto mr-auto" alt="карта маршрута"/>
      </div>
    </div>

    <div className="mt-5">
      <p className="custom-list-heading">ИНФОРМАЦИЯ О ПУТЯХ ДВИЖЕНИЯ ПО ТЕРРИТОРИИ ОБЪЕКТА</p>
      <p className="custom-text">На территории, прилегающей к зданию учреждения, нет парковочных мест для автотранспорта людей с ограниченными
        возможностями. Так же отсутствует выделенная парковка для клиентов медицинской организации. Организация
        находится в зоне бесплатной парковки.
      </p>
      <p className="custom-text">Путь движения для пациентов с ограниченными возможностями здоровья осуществляется только через «Главный вход»
        медицинской организации, который располагается в торце здания с левой стороны по адресу Большеохтинский проспект
        16 корпус 1.
      </p>

      <div className="grid grid-cols-1 gap-1 justify-center w-full">
        <img src="/images/contacts/map4.webp" alt="план" className="w-1/2 ml-auto mr-auto"/>
      </div>
    </div>
    <div className="custom-list">
      <p className="custom-list-heading"> Основные нормативные правовые акты:</p>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Конвенция о правах инвалидов</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Федеральный закон от 24.11.1995 № 181-ФЗ «О социальной защите инвалидов в Российской Федерации»</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Федеральный закон от 01.12.2014 № 419-ФЗ «О внесении изменений в отдельные законодательные акты Российской
          Федерации по вопросам социальной защиты инвалидов в связи с ратификацией Конвенции о правах инвалидов»</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Федеральный закон от 30.12.2009 № 384-ФЗ «Технический регламент о безопасности зданий и сооружений»</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Распоряжение Правительства Санкт‑Петербурга от 14.04.2021 № 11-рп «Об утверждении плана мероприятий
          («дорожной карты») по повышению значений показателей доступности для инвалидов объектов и услуг в
          Санкт‑Петербурге на 2021-2025 годы»</p>
      </div>
      <div className="custom-list-container">
        <span className="custom-list-symbol"></span>
        <p>Распоряжение Комитета по социальной политике Санкт‑Петербурга от 04.04.2011 № 73-р «Об утверждении
          Методических рекомендаций по организации деятельности по созданию условий для беспрепятственного доступа
          инвалидов и других маломобильных групп населения к объектам социальной инфраструктуры»</p>
      </div>
    </div>
    <div className="grid xl:grid-cols-2 lg:grid-cols-1 gap-1 xl:mt-4 lg:mt-3">
      <img src="/images/mobile-clients/mc1.jpg" alt=""/>
      <img src="/images/mobile-clients/mc2.jpg" alt=""/>
      <img src="/images/mobile-clients/mc3.jpg" alt=""/>
      <img src="/images/mobile-clients/mc4.jpg" alt=""/>
      <img src="/images/mobile-clients/mc5.jpg" alt=""/>
    </div>

  </div>
);

export default DostupnayaSreda;
