import React from 'react';

const Blogs = () => {
    return (
        <div dashboard-sidebar className='px-48 mt-10' >
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content">
                    <p>For general performance it's a matter of analysing bottlenecks, react devtools are handy because it shows you what components are getting rerendered, why are they getting rerendered and how much time it takes to rerender them. Try finding those expensive trees and if they are getting rerendered because the parent does, slap a React.memo on them (But please, don't abuse it by putting it everywhere). Then stuff like list virtualization are things to consider... If it's rendering a list with hundreds of elements while only a dozen are being shown in the scroll area it might be worth it.</p>
                </div>
            </div>
            <br />
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>Prototypal inheritance (a.k.a. prototype-based programming) describes a form of object-oriented programming in which objects inherit directly from other objects. It is an alternative to class-based programming, where objects are instances of classes, and those classes inherit from other classes. The prototypal scheme appears to be more flexible, eliminating the separation between classes and instances. However, the vast majority of prototype-based code seems only use prototypes to build a class-like system, immediately reinstating that separation - some objects are used strictly as classes, others are instances of those classes.For example, in the book "Programming in Lua", the chapter on "Object-Oriented Programming" is almost entirely about how to "emulate classes in Lua".</p>
                </div>
            </div>
            <br />
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content">
                    <p>Unit Testing is programming backwards. When you write code, you are writing the steps to perform an action in order to get a certain result. When writing a test, you are writing code that checks the results of actions that are performed. Some people even write the tests first, then write code until they pass. this is called "Test Driven Development" or TDD.</p>
                    <br />
                    Why should write unit tests?
                    <br />
                    <li>Unit testing helps you discover bugs before they become bugs. The act of thinking through how to test your code will uncover silly and stupid programming errors.</li>
                    <li>Unit testing forces you to think through edge cases that are difficult for some to think through when you're just trying to get something to work.</li>
                    <li>Unit tests are the best documentation you could write. When well written, a unit test describes how code works. It also requires update when behavior changes, so it'll never be out of date; when it's not accurate, it'll break your build.</li>
                    <li>Unit testing encourages better design. Knowing you need to write a unit test will force design considerations that otherwise take years of experience to realize. This can be a double-edge sword though, as I've seen bad design lead to worse design when unit tests are forced onto terrible existing code (i.e.: "I'll just make this thing public so I can access it from my test."</li>
                    <li> Most importantly, unit testing provides a very important safety net for you. If you want to add a feature, refactor some code or hand your app off to another maintainer, there's a very clear signal if something breaks and the broken unit test will tell you where it's broken and how it's supposed to work.</li>
                </div>
            </div>
            <br />
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>There are four main types of state you need to properly manage in your React apps:</p>
                    <li>Local state</li>
                    <li>Global state</li>
                    <li>Server state</li>
                    <li>URL state</li>
                </div>
            </div>
            <br />
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Why you do not set the state directly in React?
                </div>
                <div className="collapse-content">
                    <p> If you don't use the setter function returned by useState, React will not know that you mutated the state.
                        And because React does not know that the state has changed, it does not rerender the component. So the user will not see the changed state, and this is almost certainly not what you want. If you really have a situation where you don't want the component to be rendered when a state changes, consider using useRef instead of useState.</p>
                </div>
            </div>
        </div >
    );
};

export default Blogs;