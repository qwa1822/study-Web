
/** CANVAS 입니다 */
const canvas=document.querySelector("canvas");
/** 캔버스 그림을 그릴떄 사용 context */
const ctx=canvas.getContext("2d");


canvas.width=800;
canvas.height=800;
/** Canva 좌표 시스템  
 * 맨끝점은 0,0부터 시작합니다.
*/
/** x,y,width, height */
ctx.fillRect(50,50,100,200);




