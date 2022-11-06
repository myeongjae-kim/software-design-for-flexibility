(load "./compose")

((compose (lambda (x) (list 'foo x))
          (lambda (x) (list 'bar x)))
 'z)
