---
banner: "https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg"
---
# Find the Smallest Possible Matching ?
<hr> 

> [!danger] ## Find the Smallest Possible Matching ?
> In regular expressions, a <mark>greedy match</mark> finds the longest possible part of a string that fits the regex pattern and returns it as a match. 
> The alternative is called a <match>lazy match</match>, which finds the smallest possible part of the string that satisfies the regex pattern.
> 
> You can use the `?` character to change it to lazy matching.
> `"titanic"` matched against the adjusted regex of `/t[a-z]*?i/` returns `["ti"]`.
> 
> > [!example]
> > 
> > ```js
> > let text = "<h1>Winter is coming</h1>";
> > let myRegex = /<.*?>/; 
> > let result = text.match(myRegex);
> > ```
> > > [!bug]
> > > <code>[< h1>, < /h1>]</code>
> > 
> 

<hr>
<b>Tags:</b> #javascript #regex