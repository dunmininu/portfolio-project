import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CallList } from "./call/CallList";
import { CallCreate } from "./call/CallCreate";
import { CallEdit } from "./call/CallEdit";
import { CallShow } from "./call/CallShow";
import { TranscriptionList } from "./transcription/TranscriptionList";
import { TranscriptionCreate } from "./transcription/TranscriptionCreate";
import { TranscriptionEdit } from "./transcription/TranscriptionEdit";
import { TranscriptionShow } from "./transcription/TranscriptionShow";
import { CallRecordList } from "./callRecord/CallRecordList";
import { CallRecordCreate } from "./callRecord/CallRecordCreate";
import { CallRecordEdit } from "./callRecord/CallRecordEdit";
import { CallRecordShow } from "./callRecord/CallRecordShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"testingtranscription"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Call"
          list={CallList}
          edit={CallEdit}
          create={CallCreate}
          show={CallShow}
        />
        <Resource
          name="Transcription"
          list={TranscriptionList}
          edit={TranscriptionEdit}
          create={TranscriptionCreate}
          show={TranscriptionShow}
        />
        <Resource
          name="CallRecord"
          list={CallRecordList}
          edit={CallRecordEdit}
          create={CallRecordCreate}
          show={CallRecordShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
