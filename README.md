NextJS - Mock interview 

## Problem

Bu proyektdə sizdən slotlar və parallel route-lardan istifadə edərək user-in rolune uyğun olan səhifələri göstərməyiniz istənilir.


Project oyren.dev-dən 3 fərqli micro front end istifadə edir. Bu micro front end-lər:
 * Admin dashboard - https://oyren.dev/code-page/1c5bcd38-f4b9-49cd-9ab1-cd69097c82dc
 * User dashboard - https://oyren.dev/code-page/092a2810-0283-41b6-866f-b8cec6332296
 * Finance dashboard - https://oyren.dev/code-page/fdc6447b-05e3-4639-b0a7-22cbaae69c4a

Hal hazırda bu 3 dashboard fərqli endpointlərdə işləyir.

Problem: 
```
Biz user-in roluna uyğun olan səhifələri göstərmək istəyirik.

Məsələn, user admin rolunda olduğu zaman admin dashboard-u göstərmək, user finance rolunda olduğu zaman finance dashboard-u göstərmək və s.
```
User role-u aşağıdakı endpointdən gəlir:
```
/api/user/role
```