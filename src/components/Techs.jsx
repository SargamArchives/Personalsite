import React from "react";

const Rating = ({ number }) => {
  return (
    <div class="rating">
      {[...Array(5)].map((_, i) => {
        const checked = i === number - 1;
        return (
          <input
            disabled
            type="radio"
            class="mask mask-star"
            checked={checked}
          />
        );
      })}
    </div>
  );
};

function Techs() {
  return (
    <div>
      <h1 className="text-2xl lg:text-4xl mb-5 lg:mb-10 text-center">
        Languages I'm familar with
      </h1>
      <div class="overflow-x-auto max-w-[1000px] mx-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Language</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>HTML</td>
              <td>
                <Rating number={4} />
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>CSS</td>
              <td>
                <Rating number={1} />
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>Javascript</td>
              <td>
                <Rating number={3} />
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>Python</td>
              <td>
                <Rating number={3} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Techs;
