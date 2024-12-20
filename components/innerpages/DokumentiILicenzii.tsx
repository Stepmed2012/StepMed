const DokumentiILicenzii = () => (
  <div className="container">
    <h1>Документы и лицензии</h1>

    <h2 className="custom-title">Лицензия</h2>
    {/* <div className="license__block">
      <img className="license__image" src="/images/licenses/license_01.webp" />
      <img className="license__image" src="/images/licenses/license_02.webp" />
      <img className="license__image" src="/images/licenses/license_03.webp" />
    </div> */}
    <div className="mt-2 ">
      <div>
      <a
        href="/pdfs/licenses_26_07_2022.pdf"
        className="custom-text-link mr-4"
        target="_blank"
        title="Выписка из реестра лицензий по состоянию на 26.07.2022г."
      >
        Выписка из реестра лицензий по состоянию на 26.07.2022г (PDF)
      </a>
      </div>
      <div>
      <a
        href="/pdfs/licenses_08_06_2022.pdf"
        className="custom-text-link"
        target="_blank"
        title="Выписка из реестра лицензий по состоянию на 08.06.2022г."
      >
        Выписка из реестра лицензий по состоянию на 08.06.2022г (PDF)
      </a>
      </div>
      <p className="custom-text">
        Обращаем Ваше внимание, что с января 2021 года лицензии на бланках не
        выдаются, а учет осуществляемых видов деятельности реализуется путем
        ведения реестра лицензий Федеральной службой по надзору в сфере
        здравоохранения. Получить актуальную информацию о действующей лицензии
        Вы можете{' '}
        <a
          href="https://roszdravnadzor.gov.ru/services/licenses"
          className="custom-text-link"
          target="_blank"
        >
          на сайте Росздравнадзора
        </a>
        {''}, указав в поисковой строке «Степмед Клиник»
      </p>
    </div>

    <h2 className="custom-title">Санитарно-эпидемиологическое заключение</h2>
    {/*<div className="license__block">*/}
    {/*  <img className="license__image" src="/images/licenses/sez_01.webp" />*/}
    {/*  <img className="license__image" src="/images/licenses/sez_02.webp" />*/}
    {/*</div>*/}
    <div className="mt-2 ">
      <a href="/pdfs/SEZ.pdf" className="custom-text-link" target="_blank">
        Открыть в формате PDF
      </a>
    </div>
  </div>
);

export default DokumentiILicenzii;
