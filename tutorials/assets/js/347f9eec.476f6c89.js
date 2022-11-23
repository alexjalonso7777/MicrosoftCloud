"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[45],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"4. Dynamically Create an Azure Communication Services Identity and Token",sidebar_position:4},o="Exercise 4",l={unversionedId:"ACS to Teams/Create ACS Identity Token",id:"ACS to Teams/Create ACS Identity Token",title:"4. Dynamically Create an Azure Communication Services Identity and Token",description:"Dynamically Create an Azure Communication Services Identity and Token",source:"@site/docs/ACS to Teams/04-Create ACS Identity Token.md",sourceDirName:"ACS to Teams",slug:"/ACS to Teams/Create ACS Identity Token",permalink:"/MicrosoftCloud/tutorials/docs/ACS to Teams/Create ACS Identity Token",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4. Dynamically Create an Azure Communication Services Identity and Token",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3. Dynamically Create a Microsoft Teams Meeting using Microsoft Graph",permalink:"/MicrosoftCloud/tutorials/docs/ACS to Teams/Create Teams Meeting"},next:{title:"5. Deploy the App to Azure Static Web Apps",permalink:"/MicrosoftCloud/tutorials/docs/ACS to Teams/Deploy to SWA"}},s={},p=[{value:"Dynamically Create an Azure Communication Services Identity and Token",id:"dynamically-create-an-azure-communication-services-identity-and-token",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exercise-4"},"Exercise 4"),(0,i.kt)("h2",{id:"dynamically-create-an-azure-communication-services-identity-and-token"},"Dynamically Create an Azure Communication Services Identity and Token"),(0,i.kt)("p",null,"In this exercise you'll learn how to dynamically retrieve user identity and token values from Azure Communication Services using Azure Functions. Once retrieved, the values will be passed to the ACS UI composite to enable a call to be made by a customer."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create ACS Identity and Token",src:n(233).Z,title:"Create ACS Identity and Token",width:"1375",height:"610"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"local.settings.json")," and update the ",(0,i.kt)("inlineCode",{parentName:"p"},"ACS_CONNECTION_STRING")," value with the ACS connection string you saved in an earlier exercise.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"samples/acs-to-teams-meeting/server/typescript/ACSTokenFunction/index.ts")," in VS Code. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Notice that it has the following import at the top of the file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CommunicationIdentityClient } from '@azure/communication-identity';\n\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The function performs the following tasks:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Gets the ACS connection string from an environment variable named ",(0,i.kt)("inlineCode",{parentName:"p"},"ACS_CONNECTION_STRING"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const connectionString = process.env.ACS_CONNECTION_STRING;\n")))),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This is the connection string value you added into the ",(0,i.kt)("inlineCode",{parentName:"p"},"local.settings.json")," file earlier.")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creates a new ",(0,i.kt)("inlineCode",{parentName:"p"},"CommunicationIdentityClient")," instance and passes the ACS connection string to it."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"let tokenClient = new CommunicationIdentityClient(connectionString);\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creates an ACS user and gets a Voice Over IP token."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const user = await tokenClient.createUser();\nconst userToken = await tokenClient.getToken(user, ["voip"]);\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sends the userId and token values back to the caller."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"context.res = {\n    body: { userId: user.communicationUserId, ...userToken }\n};\n"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"samples/acs-to-teams-meeting/server/typescript")," folder in a terminal window and run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now that the Azure Functions are running locally, the client needs to be able to call into them to get the ACS user identity and token values.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"samples/acs-to-teams-meeting/client/react/App.tsx")," file in your editor.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Locate the ",(0,i.kt)("inlineCode",{parentName:"p"},"userId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," state variables in the component. Remove the hardcoded values and replace them with empty quotes:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const [userId, setUserId] = useState<string>('');\nconst [token, setToken] = useState<string>('');\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Locate the ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," function and change it to look like the following to enable calling the Azure Function to retrieve an ACS user identity and token: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"useEffect(() => {\n    const init = async () => {\n        setMessage('Getting ACS user');\n        //Call Azure Function to get the ACS user identity and token\n        let res = await fetch(process.env.REACT_APP_ACS_USER_FUNCTION as string);\n        let user = await res.json();\n        setUserId(user.userId);\n        setToken(user.token);\n        \n        setMessage('Getting Teams meeting link...');\n        //Call Azure Function to get the meeting link\n        res = await fetch(process.env.REACT_APP_TEAMS_MEETING_FUNCTION as string);\n        let link = await res.text();\n        setTeamsMeetingLink(link);\n        setMessage('');\n        console.log('Teams meeting link', link);\n    }\n    init();\n\n}, []);\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save the file before continuing.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open a separate terminal and run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," folder. After it builds you should see the ACS calling UI displayed and you can call into the Teams meeting that was dynamically created by Microsoft Graph.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Stop both of the terminal processes (React and Azure Functions) by selecting ",(0,i.kt)("inlineCode",{parentName:"p"},"ctrl + c"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Commit your git changes and push them to your GitHub repository using VS Code:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Select the git icon (3rd one down in the VS Code toolbar)."),(0,i.kt)("li",{parentName:"ul"},"Enter a commit message and select ",(0,i.kt)("inlineCode",{parentName:"li"},"Commit"),"."),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Sync Changes"),".")))))}m.isMDXComponent=!0},233:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-acs-identity-token-ae4ea4a41d03f4dc3373f4403718ec63.png"}}]);