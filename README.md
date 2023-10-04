This is AI document reader that will parse document and convert into
structured data. So users can simply enter prompts and gain knowledge
from the document without spending time reading it.

test locally:
1. update node.js to version 18+
2. install packages listed in package.json files
3. add openai key there in /server/.env
4. npm run dev

deploy to Amazon Amplify:
1. npm run build
2. cd build
3. Mac: zip build.zip -r *
4. windows: go to build folder, select all files, create build.zip
5. Go to AWS, choose "AWS Amplify" service
6. Choose "deploy without git provider"
7. give app a name, and environment name, select "drag and drop"
8. upload the build.zip file
9. click "save and deploy"
10. wait for some time and deployment URL will be shown on "Domain" section





