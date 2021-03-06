import { useCallback, useEffect } from 'react';

import { useStoreActions, useStoreState } from 'hooks';
import { MessageStatusENUM } from 'store/models/regForm';
import InputMask from 'react-input-mask';
import { useForm, SubmitHandler } from 'react-hook-form';

import WhatsAppIcon from '@icons/Whatsapp';
import TelegramIcon from '@icons/Telegram';

interface IFormInputs {
  fullName: string;
  phoneNumber: string;
  dataProcessing: boolean;
}

const Registration = () => {
  const regBarVisibility = useStoreState(
    (state) => state.regBar.regBarVisibility,
  );
  const regFormMessageStatus = useStoreState(
    (state) => state.regForm.messageStatus,
  );
  const setRegBarVisibility = useStoreActions(
    (actions) => actions.regBar.setRegBarVisibility,
  );
  const setRegFormMessageStatus = useStoreActions(
    (actions) => actions.regForm,
  ).setMessageStatus;

  const closeReg = useCallback(() => {
    setRegBarVisibility(false);
  }, [setRegBarVisibility]);

  const { register, handleSubmit, reset, formState } = useForm<IFormInputs>({
    defaultValues: { fullName: '', phoneNumber: '', dataProcessing: false },
  });

  useEffect(() => {
    if (
      formState.isSubmitSuccessful &&
      regFormMessageStatus === MessageStatusENUM.SUCCESS
    ) {
      reset({ fullName: '', phoneNumber: '', dataProcessing: false });
    }
  }, [formState, reset]);

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const request = await fetch('/api/sendTelegramMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messageText: `š¤ : ${data.fullName}\nš± : ${data.phoneNumber}`,
      }),
    });

    if (request.status === 200) {
      setRegFormMessageStatus(MessageStatusENUM.SUCCESS);
      return;
    }

    return setRegFormMessageStatus(MessageStatusENUM.FAILED);
  };

  return (
    <>
      {regBarVisibility && (
        <aside>
          <div className="z-30 fixed top-0 flex flex-col p-4 md:p-8 w-full md:w-[38rem] h-full bg-white overflow-y-auto">
            <span
              className="self-end px-2 text-2xl cursor-pointer select-none text-text-secondary hover:text-opacity-60"
              onClick={closeReg}
            >
              &#10005;
            </span>
            <h1 className="my-6 text-xl md:my-10 sm:text-2xl md:text-3xl">
              ŠŃŃŠ°Š²ŃŃŠµ ŃŠ²Š¾Š¹ Š½Š¾Š¼ŠµŃ ŃŠµŠ»ŠµŃŠ¾Š½Š° Šø Š¼Ń ŠæŠµŃŠµŠ·Š²Š¾Š½ŠøŠ¼ ŠŠ°Š¼ Š² ŃŠ°Š±Š¾ŃŠµŠµ Š²ŃŠµŠ¼Ń
              ŠŗŠ»ŠøŠ½ŠøŠŗŠø.
            </h1>

            {regFormMessageStatus === MessageStatusENUM.FAILED && (
              <p className="text-red-400 custom-form-info">
                ŠŃŠ¾ŠøŠ·Š¾ŃŠ»Š° Š¾ŃŠøŠ±ŠŗŠ° Š²Š¾ Š²ŃŠµŠ¼Ń Š¾ŃŃŠ°Š²ŠŗŠø ŃŠ¾Š¾Š±ŃŠµŠ½ŠøŃ! ŠŠ¾Š²ŃŠ¾ŃŠøŃŠµ ŠµŃŃ ŃŠ°Š·.
              </p>
            )}

            {regFormMessageStatus === MessageStatusENUM.SUCCESS && (
              <p className="text-green-400 custom-form-info">
                ŠŠ°ŃŠµ ŃŠ¾Š¾Š±ŃŠµŠ½ŠøŠµ Š±ŃŠ»Š¾ ŃŃŠæŠµŃŠ½Š¾ Š¾ŃŠæŃŠ°Š²Š»ŠµŠ½Š¾. Š”ŠæŠ°ŃŠøŠ±Š¾!
              </p>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="custom-input">
                <label htmlFor="fullName">ŠŠ¼Ń</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="ŠŠ°ŠæŃŠøŠ¼ŠµŃ, Š”Š¾ŠŗŠ¾Š»Š¾Š² ŠŠ»ŠµŠŗŃŠ°Š½Š“Ń"
                  maxLength={40}
                  {...register('fullName', { required: true })}
                ></input>
                {formState.errors.fullName && (
                  <p className="custom-input-error">
                    ŠŠ¾Š»Šµ "ŠŠ¼Ń" Š¾Š±ŃŠ·Š°ŃŠµŠ»ŃŠ½Š¾ Š“Š»Ń Š·Š°ŠæŠ¾Š»Š½ŠµŠ½ŠøŃ
                  </p>
                )}
              </div>

              <div className="custom-input">
                <label htmlFor="phoneNumber">Š¢ŠµŠ»ŠµŃŠ¾Š½</label>
                <InputMask
                  id="phoneNumber"
                  type="text"
                  placeholder="ŠŠ°ŠæŃŠøŠ¼ŠµŃ, +7 (812) 123-45-67"
                  mask="+7 \(999) 999-99-99"
                  {...register('phoneNumber', { required: true })}
                />
                {formState.errors.phoneNumber && (
                  <p className="custom-input-error">
                    ŠŠ¾Š»Šµ "Š¢ŠµŠ»ŠµŃŠ¾Š½" Š¾Š±ŃŠ·Š°ŃŠµŠ»ŃŠ½Š¾ Š“Š»Ń Š·Š°ŠæŠ¾Š»Š½ŠµŠ½ŠøŃ
                  </p>
                )}
              </div>

              <div className="custom-input md:mt-6">
                <label className="custom-checkbox" id="dataProcessing">
                  <input
                    className="custom-checkbox-disable"
                    type="checkbox"
                    {...register('dataProcessing', { required: true })}
                  />
                  <span className="custom-checkbox-button"></span>
                  <p className="mt-0 ml-2 custom-text">
                    ŠÆ ŃŠ¾Š³Š»Š°ŃŠ°ŃŃŃ Š½Š°{' '}
                    <a
                      href="/obrabotka-dannih"
                      className="custom-text-link"
                      target="_blank"
                    >
                      Š¾Š±ŃŠ°Š±Š¾ŃŠŗŃ ŠæŠµŃŃŠ¾Š½Š°Š»ŃŠ½ŃŃ Š“Š°Š½Š½ŃŃ
                    </a>
                  </p>
                </label>
                {formState.errors.dataProcessing && (
                  <p className="custom-input-error">
                    ŠŠµŠ¾Š±ŃŠ¾Š“ŠøŠ¼Š¾ ŃŠ¾Š³Š»Š°ŃŠøŠµ Š½Š° Š¾Š±ŃŠ°Š±Š¾ŃŠŗŃ ŠæŠµŃŃŠ¾Š½Š°Š»ŃŠ½ŃŃ Š“Š°Š½Š½ŃŃ
                  </p>
                )}
              </div>

              <button type="submit" className="w-full mt-6 md:mt-8 bttn">
                ŠŠ°ŠæŠøŃŠ°ŃŃŃŃ
              </button>
            </form>

            <p className="mt-4 mb-2 text-center md:mt-8 md:mb-4">
              ŠøŠ»Šø Š½Š°ŠæŠøŃŠøŃŠµ Š½Š°Š¼
            </p>
            <div className="flex flex-col sm:flex-row">
              <a
                target="_blank"
                href="https://t.me/Stepmed_Clinic"
                className="items-center w-full sm:mr-4 bttn"
              >
                <TelegramIcon className="w-8 h-8 mr-3" />
                <span className="bttn-text">Telegram</span>
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=79214149058"
                className="items-center w-full mt-4 sm:mt-0 bttn"
              >
                <WhatsAppIcon className="w-8 h-8 mr-3" />
                <span className="bttn-text">WhatsApp</span>
              </a>
            </div>
          </div>
          <div
            className="fixed top-0 bottom-0 left-0 right-0 z-20 visible w-screen h-screen bg-black opacity-50 cursor-pointer"
            onClick={closeReg}
          ></div>
        </aside>
      )}
    </>
  );
};

export default Registration;
