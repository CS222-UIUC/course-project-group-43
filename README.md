Team 43_Project Proposal
Jialin He, Jinyu Yang, Yuteng Zhuang(Dropped), Chang Li
  
  
Pitch
In the process of using a browser to study or work, people waste a lot of time looking at irrelevant content.
We are going to build a browser-based time management tool as an extension for the popular softwares to help people spend their time efficiently.
Functionality.   
1. Users can set the length of timer, breakpoints, and other side tools.  
2. Users can view the available browser notifications. 
3. Users can track using stats for each experience. 
4. Users can set the todo list inside a calender. 
5. Users can customize theme. 
6. Users can select background music. 
    
Components Frontend:
Our project will mainly focus on the frontend as all the functions can be implemented through JavaScript on our extension. Since there is no need for users to have login and further functions, we won’t implement the backend components.

● HTML: We will use HTML for the general layout of our extension. As HTML is a very useful language to implement each block and sections, we can divide our extension into several modules for different functions and purposes. In addition, HTML is capable of being tested in local machines. Furthermore, we may use css files to help us to optimize layout and overall page design.

● JavaScript: In order to realize the functions as mentioned above, we will use JavaScript to embed the code in our extension, for example, the tool bar, the notification and the todo list. The reason why we choose JavaScript as our main language for our project is because JavaScript is an object-oriented language. Compared with HTML, which is a declarative language, 
object-oriented language can perform better and increase the efficiency for the runtime of the whole project.

● JSON: However, as an extension for mainstream browsers and applications (eg. Chrome, Discord, etc), we will make sure our project won’t have any problems with compatibility across browsers and application platforms. For instance, we may use json for the compatibility of our project as an extension.
   
   
 Weekly Planning Week1
- Project Initialization. 

● Complete the building environment in vscode. 

● Set up basic file structure. 
Week2. 

● Functional underlying logic. 

● Feature user interaction logic. 

● Data Storage. 

● Data Transfer. 
Week3
- Partial implementation complete and running testing suits
- Adjusting the user interface

● Interaction

● Visualization
Week4
- Complete testing of partial features
- Roughly complete implementation of all logical functions

 Week5
- Package front-end projects, upload and preview them in Chrome
Week6
- Field testing with massive rounds
- Solve bug encounter in last step
Week7
- Second test draft

● Test stability and possible memory issue for all features

Week8
- Third test draft:

● Optimize performance
- Final release
Potential Risks
1. We may encounter issues while handling API differences. One possible problem could be lack of support for an entire function. If we can not solve this issue, we plan to first post the problems on the developer platform. In the worst case,we can decide to use this extension in another web browser which could support our API. We may spend one week solving this issue and would not affect our overall progress.
2. The front-end design of software needs to take into account aesthetics and user experience. How to design software quickly and aesthetically is a challenge. We plan to ask for some advice from our friends, parents, etc.
3. Some of the team members were less familiar with HTML and Javascript than with C and Python. So it was a challenge for us to develop software in a language we weren't familiar with. During development, we may frequently check for syntax errors or become familiar with language properties. This may cause us some trouble
Teamwork
We'll start by creating a Git repo to keep everyone in sync with progress and code. We also plan to use the same programming language and make sure that the version of the programming language is consistent to avoid compatibility issues. In the process of cooperation, we will first communicate with the group members to seek help or get everyone's consent for any problem and any important decision.
As a team of four, it's important to divide the work. We plan to divide our time management system into several parts. Everyone gets an equal amount of work to make sure everyone contributes to the project.
Continuous Integration

Test:
- Set Test Case chunks on vscode 1.Functional tests
2.Integration tests
3.Unit tests
- Implement EsLint to check code standard
- Include JavaScript(ES6) code snippets library to check js code
- Call ”npm run build” to pack sources
Style guide:
- JavaScript Standard Style
Pull Request Workflow:
Except the default branch that store all the files, we plan to make 4 sub branches related to 4 different parts of our code:
1. UI page design
2. Notification design
3. Function: Tomato Time & Task Management
4. Function: Preset background theme and music

