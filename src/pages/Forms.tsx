import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonLabel,
  IonButton,
  IonItemDivider,
} from '@ionic/react';
import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

interface IFormsProps {}

interface IFormState {
  username: string;
  password: string;
}

const Forms: React.FC<IFormsProps> = () => {
  const [formValues, setFormValues] = useState<IFormState>({
    username: '',
    password: '',
  });

  interface IInputs {
    email: string;
    cypher: string;
  }

  const { handleSubmit, control } = useForm<IInputs>();
  const onSubmit: SubmitHandler<IInputs> = (data) => console.log(data);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Forms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="home-content">
        <IonLabel>
          <pre>{JSON.stringify(formValues, null, 2)}</pre>
        </IonLabel>
        <IonItemDivider>HTML Form</IonItemDivider>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e);
          }}
        >
          <IonList>
            <IonItem>
              <IonLabel>Username:</IonLabel>
              <IonInput
                value={formValues.username}
                onIonChange={(e) =>
                  setFormValues({ ...formValues, username: e.detail.value! })
                }
                debounce={200}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Password:</IonLabel>
              <IonInput
                value={formValues.password}
                onIonChange={(e) =>
                  setFormValues({ ...formValues, password: e.detail.value! })
                }
                debounce={200}
              />
            </IonItem>
            <IonItem>
              <IonButton type="submit">Submit</IonButton>
              <input type="submit" style={{ display: 'none' }} />
            </IonItem>
          </IonList>
        </form>
        <IonItemDivider>Hook Form</IonItemDivider>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonList>
            <IonItem>
              <IonLabel>Email:</IonLabel>
              <Controller
                name="email"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <IonInput
                    debounce={200}
                    value={value}
                    onIonChange={onChange}
                  />
                )}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Cypher:</IonLabel>
              <Controller
                name="cypher"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <IonInput
                    debounce={200}
                    value={value}
                    onIonChange={onChange}
                  />
                )}
              />
            </IonItem>
            <IonItem>
              <IonButton type="submit">Submit</IonButton>
              <input type="submit" style={{ display: 'none' }} />
            </IonItem>
          </IonList>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Forms;
